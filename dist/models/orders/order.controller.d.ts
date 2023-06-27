import { OrderEntity } from './entities/order.entity';
import { OrdersService } from './order.service';
import { OrderFilterDTO, OrderGetByKitchen, OrderSearchByDate, SessionFilterOrder } from './dto/order-filter.dto';
import { OrderCreationDTO } from './dto/create-order.dto';
import { OrderDetailRes } from './dto/order-detail-res';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    orderSub(dto: OrderCreationDTO): Promise<string>;
    getOrderBySession(filter: SessionFilterOrder): Promise<OrderEntity[]>;
    getOrderByStatus(orderFilter: OrderFilterDTO): Promise<OrderEntity[]>;
    getOrderByKitchen(data: OrderSearchByDate, orderFilter: OrderFilterDTO): Promise<OrderEntity[]>;
    getOrderToTrip(find: OrderGetByKitchen): Promise<OrderEntity[]>;
    getOrderById(id: string): Promise<OrderEntity>;
    getOrderDetail(id: string): Promise<OrderDetailRes>;
}
