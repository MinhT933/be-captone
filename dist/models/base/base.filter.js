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
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = exports.IPaginate = exports.BaseFilter = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const sort_enum_1 = require("../../common/enums/sort.enum");
class BaseFilter {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'SizePage(Summary of element on page)',
        default: '5',
        required: false,
    }),
    __metadata("design:type", Number)
], BaseFilter.prototype, "sizePage", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'CurrentPage',
        default: '1',
        required: false,
    }),
    __metadata("design:type", Number)
], BaseFilter.prototype, "currentPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: sort_enum_1.SortEnum,
        description: 'Sort Ascending or Descending by ',
        required: false,
        default: sort_enum_1.SortEnum.ASCENDING,
    }),
    __metadata("design:type", String)
], BaseFilter.prototype, "sort", void 0);
exports.BaseFilter = BaseFilter;
class IPaginate {
}
exports.IPaginate = IPaginate;
function paginate(data, page, limit) {
    const [result, total] = data;
    const lastPage = Math.ceil(total / limit);
    const nextPage = page + 1 > lastPage ? null : page + 1;
    const prevPage = page - 1 < 1 ? null : page - 1;
    return {
        data: result,
        count: total,
        currentPage: page,
        nextPage: nextPage,
        prevPage: prevPage,
        lastPage: lastPage,
    };
}
exports.paginate = paginate;
//# sourceMappingURL=base.filter.js.map