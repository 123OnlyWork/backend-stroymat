"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./prisma.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: ['http://localhost:3000', 'http://31.129.63.103:3000'],
        credentials: true
    });
    await app.listen(4200);
}
bootstrap();
//# sourceMappingURL=main.js.map