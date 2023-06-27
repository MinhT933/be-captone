"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_service_1 = require("./config/app/config.service");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const firebaseAdmin = require("firebase-admin");
const config_service_2 = require("./config/firebase/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.enableCors();
    const appConfig = app.get(config_service_1.AppConfigService);
    const firebaseConfig = app.get(config_service_2.FireBaseConfigService);
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert({
            projectId: firebaseConfig.projectId,
            privateKey: firebaseConfig.privateKey,
            clientEmail: firebaseConfig.clientEmail,
        }),
        storageBucket: firebaseConfig.storageBucket,
    });
    const configSwagger = new swagger_1.DocumentBuilder()
        .setTitle('Capstone Meal Sub Plan')
        .setDescription('The project API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, configSwagger);
    swagger_1.SwaggerModule.setup('/api/v1/', app, document);
    const PORT = process.env.PORT || 2004;
    await app.listen(PORT, () => console.info(`Server running port ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map