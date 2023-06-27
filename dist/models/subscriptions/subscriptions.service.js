"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sub_enum_1 = require("../../common/enums/sub.enum");
const typeorm_2 = require("typeorm");
const vnpay_service_1 = require("../../providers/vnpay/vnpay.service");
const base_service_1 = require("../base/base.service");
const packages_service_1 = require("../packages/packages.service");
const payments_service_1 = require("../payment/payments.service");
const subscription_entity_1 = require("./entities/subscription.entity");
const banks_service_1 = require("../banks/banks.service");
const order_service_1 = require("../orders/order.service");
const notifications_service_1 = require("../notifications/notifications.service");
const firebase_message_service_1 = require("../../providers/firebase/message/firebase-message.service");
const accounts_service_1 = require("../accounts/accounts.service");
const role_enum_1 = require("../../common/enums/role.enum");
let SubscriptionService = class SubscriptionService extends base_service_1.BaseService {
    constructor(subscriptionRepository, packageService, paymentsService, vnpayService, banksService, accountService, notificationsService, firebaseMessageService, orderService) {
        super(subscriptionRepository);
        this.subscriptionRepository = subscriptionRepository;
        this.packageService = packageService;
        this.paymentsService = paymentsService;
        this.vnpayService = vnpayService;
        this.banksService = banksService;
        this.accountService = accountService;
        this.notificationsService = notificationsService;
        this.firebaseMessageService = firebaseMessageService;
        this.orderService = orderService;
    }
    async getAllSubscription() {
        return await this.subscriptionRepository.find({
            relations: {
                account: { profile: true },
                packages: true,
            },
        });
    }
    async getSubscriptionByStatus(subFilter) {
        const { status } = subFilter;
        const list = await this.subscriptionRepository.find({
            where: { status: (0, typeorm_2.Like)(Boolean(status) ? status : '%%') },
            relations: {
                account: { profile: true },
                packages: true,
            },
        });
        if (!list || list.length == 0) {
            throw new common_1.HttpException('No sub found', common_1.HttpStatus.NOT_FOUND);
        }
        return list;
    }
    async getSubscriptionByCustomer(subFilter, user) {
        const { status } = subFilter;
        const statusCompare = (0, typeorm_2.Like)(Boolean(status) ? status : '%%');
        return await this.subscriptionRepository
            .createQueryBuilder('subscriptions')
            .select('subscriptions.id as id, totalPrice, subscriptionDate, subscriptions.status as status, packages.name as packageName, packages.image as packageImg')
            .leftJoin('subscriptions.packages', 'packages')
            .where('subscriptions.account.id = :id', { id: user.id })
            .andWhere('subscriptions.status = :status', {
            status: statusCompare.value,
        })
            .orderBy('subscriptionDate', 'DESC')
            .execute();
    }
    async subscriptionPackage(dto, user) {
        try {
            const packgeFind = await this.packageService.findOne({
                where: { id: dto.packageId },
            });
            const customerFind = await this.accountService.findOne({
                where: { id: user.id },
                relations: { role: true },
            });
            if (customerFind.role.name !== role_enum_1.RoleEnum.CUSTOMER) {
                throw new common_1.HttpException(`Only Customer can do this function`, common_1.HttpStatus.NOT_FOUND);
            }
            if (packgeFind.status !== "active") {
                throw new common_1.HttpException(`Package is not Active`, common_1.HttpStatus.BAD_REQUEST);
            }
            if (!packgeFind) {
                throw new common_1.HttpException(`PackageId ${dto.packageId} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            else if (!customerFind) {
                throw new common_1.HttpException(`CustomerId ${user.id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            else {
                return await this.subscriptionRepository.save({
                    totalPrice: dto.totalPrice,
                    subscriptionDate: dto.subscriptionDate,
                    account: customerFind,
                    packages: packgeFind,
                });
            }
        }
        catch (error) {
            throw new common_1.HttpException(`${error}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findById(id) {
        const subscription = await this.subscriptionRepository.findOne({
            where: { id: id },
            relations: {
                packages: true,
                orders: true,
            },
        });
        if (!subscription) {
            throw new common_1.HttpException('Subsriptions not found', common_1.HttpStatus.NOT_FOUND);
        }
        return subscription;
    }
    async cusFindSubById(id) {
        const subscription = await this.subscriptionRepository.findOne({
            where: { id: id },
            relations: {
                orders: { packageItem: { foodGroup: { foods: true } } },
            },
        });
        if (!subscription) {
            throw new common_1.HttpException('Subsriptions not found', common_1.HttpStatus.NOT_FOUND);
        }
        return subscription;
    }
    async customerConfirm(id, user) {
        const subscription = await this.subscriptionRepository.findOne({
            where: { id: id },
            relations: { orders: true, account: true },
        });
        if (subscription.account.id !== user.id) {
            throw new common_1.HttpException('You are not the owner of this subscription', common_1.HttpStatus.BAD_REQUEST);
        }
        subscription.status = sub_enum_1.SubEnum.INPROGRESS;
        const updateSubscription = await this.subscriptionRepository.save(subscription);
        if (!updateSubscription) {
            throw new common_1.HttpException('Fail to Buy', common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            await this.orderService.confirmSubOrder(subscription.orders);
        }
        return 'Confirm Successful';
    }
    async doneSub(id, user) {
        const subscription = await this.findById(id);
        if (subscription.account.id !== user.id) {
            throw new common_1.HttpException('You are not the owner of this subscription', common_1.HttpStatus.BAD_REQUEST);
        }
        if (subscription.status !== sub_enum_1.SubEnum.INPROGRESS) {
            throw new common_1.HttpException('Only subscription with status INPROGRESS', common_1.HttpStatus.BAD_REQUEST);
        }
        subscription.status = sub_enum_1.SubEnum.DONE;
        const updateSubscription = await this.subscriptionRepository.save(subscription);
        if (!updateSubscription) {
            throw new common_1.HttpException('Check out fail', common_1.HttpStatus.BAD_REQUEST);
        }
        return 'Subscription done';
    }
    async deleteSubscription(id, user) {
        const subFind = await this.subscriptionRepository.findOne({
            where: { id: id, account: { id: user.id }, status: sub_enum_1.SubEnum.UNCONFIRMED },
            relations: { orders: true },
        });
        if (!subFind) {
            throw new common_1.HttpException('Subscription not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!subFind.orders || subFind.orders.length == 0) {
            const delSub = await this.subscriptionRepository
                .createQueryBuilder()
                .delete()
                .from(subscription_entity_1.SubscriptionEntity)
                .where('id = :id', {
                id: id,
            })
                .andWhere('account.id = :customerId', { customerId: user.id })
                .andWhere('status = :status', { status: 'unConfirmed' })
                .execute();
            if (delSub) {
                return 'Delete success';
            }
            else {
                return 'Delete fail';
            }
        }
        else {
            const delOrders = await this.orderService.deleteSubOrder(subFind.orders);
            if (delOrders) {
                const delSub = await this.subscriptionRepository
                    .createQueryBuilder()
                    .delete()
                    .from(subscription_entity_1.SubscriptionEntity)
                    .where('id = :id', {
                    id: id,
                })
                    .andWhere('account.id = :customerId', { customerId: user.id })
                    .andWhere('status = :status', { status: 'unConfirmed' })
                    .execute();
                if (delSub) {
                    return 'Delete success';
                }
                else {
                    return 'Delete fail';
                }
            }
            else {
                return 'Delete fail';
            }
        }
    }
    async getPaymentUrl(ip, bankId, subId) {
        const subPromise = this.findOne({ where: { id: subId } });
        const bankPromise = this.banksService.findOne({ where: { id: bankId } });
        const sub = await subPromise;
        if (!Boolean(sub))
            throw new common_1.HttpException(`this sub not existed`, common_1.HttpStatus.BAD_REQUEST);
        const bank = await bankPromise;
        if (!Boolean(bank))
            throw new common_1.HttpException('this bank not supported', common_1.HttpStatus.BAD_REQUEST);
        const orderInfo = `payment for order ${sub.id}`;
        const result = this.vnpayService.payment(ip, sub.totalPrice, bank.bankCode, orderInfo, 'other', '');
        return result;
    }
    async payment(vnpayDto) {
        const subId = vnpayDto.vnp_OrderInfo.split(' ')[3];
        const subPromise = this.findOne({ where: { id: subId } });
        const paymentPromise = this.paymentsService.findOne({
            where: { transactionNo: vnpayDto.vnp_TransactionNo },
        });
        const bankPromise = this.banksService.findOne({
            where: { bankCode: vnpayDto.vnp_BankCode },
        });
        const paymentInDB = await paymentPromise;
        if (Boolean(paymentInDB))
            throw new common_1.HttpException('This transaction invalid', common_1.HttpStatus.BAD_REQUEST);
        const result = this.vnpayService.returnUrl(vnpayDto);
        if (!result || result.message !== 'success')
            throw new common_1.HttpException('You payment failed', common_1.HttpStatus.BAD_REQUEST);
        const sub = await subPromise;
        if (!Boolean(sub))
            throw new common_1.HttpException(`this sub [${subId}] not existed`, common_1.HttpStatus.BAD_REQUEST);
        const bank = await bankPromise;
        const { vnp_PayDate, vnp_TransactionStatus, vnp_TransactionNo, vnp_BankTranNo, vnp_OrderInfo, vnp_CardType, vnp_Amount, } = vnpayDto;
        await this.paymentsService.save({
            bank,
            orderInfo: vnp_OrderInfo,
            amount: parseInt(vnp_Amount),
            transactionNo: vnp_TransactionNo,
            transactionStatus: vnp_TransactionStatus,
            bankTranNo: vnp_BankTranNo,
            cardType: vnp_CardType,
            payDate: vnp_PayDate,
            subscription: sub,
        });
        sub.status = sub_enum_1.SubEnum.INPROGRESS;
        await this.save(sub);
        return result;
    }
};
SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subscription_entity_1.SubscriptionEntity)),
    __param(8, (0, common_1.Inject)((0, common_1.forwardRef)(() => order_service_1.OrdersService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        packages_service_1.PackageService,
        payments_service_1.PaymentsService,
        vnpay_service_1.VnpayService,
        banks_service_1.BanksService,
        accounts_service_1.AccountsService,
        notifications_service_1.NotificationsService,
        firebase_message_service_1.FirebaseMessageService,
        order_service_1.OrdersService])
], SubscriptionService);
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=subscriptions.service.js.map