"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const serverless = require("serverless-http");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.init();
    return serverless(app.getHttpAdapter().getInstance());
}
bootstrap().then((handler) => {
    module.exports.handler = handler;
});
//# sourceMappingURL=main.js.map