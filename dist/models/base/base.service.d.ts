/// <reference types="multer" />
import { DataSource, DeepPartial, DeleteResult, EntityManager, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';
import { BaseEntity } from './base.entity';
export declare class BaseService<T extends BaseEntity> {
    private readonly repository;
    constructor(repository: Repository<T>);
    create(entity: DeepPartial<T>): T;
    save(entity: DeepPartial<T>): Promise<T>;
    query(options?: FindManyOptions<T>): Promise<T[]>;
    findOne(options: FindOneOptions<T>): Promise<T>;
    deleteById(id: EntityId): Promise<DeleteResult>;
    uploadImageToFirebase(image: Express.Multer.File): Promise<string>;
    transaction(callback: (entityManager: EntityManager) => Promise<void>, dataSource: DataSource): Promise<void>;
}
