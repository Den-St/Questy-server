"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const common_1 = require("@nestjs/common");
exports.Token = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const [bearer, token] = request.headers.authorization.split(' ');
    return token;
});
//# sourceMappingURL=Token.decorator.js.map