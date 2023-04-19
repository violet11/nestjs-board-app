import { createParamDecorator } from "@nestjs/common/decorators"

export const GetUser = createParamDecorator((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
})