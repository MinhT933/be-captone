"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetUser = (0, common_1.createParamDecorator)((_data, ctx) => {
    const reqBody = ctx.switchToHttp().getRequest();
    return reqBody.user;
});
//# sourceMappingURL=user.decorator.js.map