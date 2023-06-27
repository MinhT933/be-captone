"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const firebase = require("firebase-admin");
const crypto_1 = require("crypto");
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }
    create(entity) {
        return this.repository.create(entity);
    }
    async save(entity) {
        return this.repository.save(entity);
    }
    async query(options) {
        return this.repository.find(options);
    }
    async findOne(options) {
        return this.repository.findOne(options);
    }
    async deleteById(id) {
        return this.repository.delete(id);
    }
    async uploadImageToFirebase(image) {
        try {
            const uuid = (0, crypto_1.randomUUID)();
            const imageName = image.originalname.split('.');
            const newImageName = uuid + '.' + imageName[imageName.length - 1];
            const url = `images/${newImageName}`;
            const bucket = firebase.storage().bucket();
            const file = bucket.file(url);
            const contents = image.buffer;
            await file.save(contents);
            return await `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(url)}?alt=media`;
        }
        catch (error) {
            throw new common_1.HttpException(`${error}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async transaction(callback, dataSource) {
        const queryRunner = dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await callback(queryRunner.manager);
            await queryRunner.commitTransaction();
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map