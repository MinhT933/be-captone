"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seeder_module_1 = require("./database/seeds/seeder.module");
const core_1 = require("@nestjs/core");
const seeder_1 = require("./database/seeds/seeder");
async function bootstrap() {
    const appContext = await core_1.NestFactory.createApplicationContext(seeder_module_1.SeederModule);
    const seeder = appContext.get(seeder_1.Seeder);
    try {
        await seeder.insertRoles();
        await seeder.insertAccount();
        await seeder.insertTimeSlot();
        await seeder.insertBank();
    }
    catch (error) {
        console.error(error);
    }
    finally {
        appContext.close();
    }
}
bootstrap();
//# sourceMappingURL=seed.js.map