"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const express = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    const port = config.get('API_PORT');
    app.enableCors();
    app.use('/uploads/profileimages', express.static((0, path_1.join)(process.cwd(), '/uploads/profileimages')));
    await app.listen(port, () => {
        console.log("started at ", port);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map