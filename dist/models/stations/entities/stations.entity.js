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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationEntity = void 0;
const classes_1 = require("@automapper/classes");
const geometryTransformer_1 = require("../../../common/types/geometryTransformer");
const base_entity_1 = require("../../base/base.entity");
const batch_entity_1 = require("../../batchs/entities/batch.entity");
const kitchens_entity_1 = require("../../kitchens/entities/kitchens.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
const typeorm_1 = require("typeorm");
const geojson_1 = require("geojson");
let StationEntity = class StationEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], StationEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], StationEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], StationEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], StationEntity.prototype, "openTime", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], StationEntity.prototype, "closeTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Coordinate',
        type: 'geometry',
        spatialFeatureType: 'Point',
        transformer: new geometryTransformer_1.GeometryTransformer(),
    }),
    __metadata("design:type", typeof (_a = typeof geojson_1.Point !== "undefined" && geojson_1.Point) === "function" ? _a : Object)
], StationEntity.prototype, "coordinate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "active" }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], StationEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.OrderEntity, (order) => order.station),
    __metadata("design:type", Array)
], StationEntity.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kitchens_entity_1.KitchenEntity, (kitchen) => kitchen.stations),
    __metadata("design:type", kitchens_entity_1.KitchenEntity)
], StationEntity.prototype, "kitchen", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => batch_entity_1.BatchEntity, (batchs) => batchs.station),
    __metadata("design:type", Array)
], StationEntity.prototype, "batchs", void 0);
StationEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'stations' })
], StationEntity);
exports.StationEntity = StationEntity;
//# sourceMappingURL=stations.entity.js.map