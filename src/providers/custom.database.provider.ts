import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { DatabaseProvider } from 'redisinsight/dist/src/modules/database/providers/database.provider';
import { Database } from 'redisinsight/dist/src/modules/database/models/database';

@Injectable()
export class CustomDatabaseProvider extends DatabaseProvider {
  private DBS = {
    custom_db1: {
      id: 'custom_db1',
      name: 'custom_db1',
      host: 'localhost',
      port: 6379,
    },
    custom_db2: {
      id: 'custom_db2',
      name: 'custom_db2',
      host: 'localhost',
      port: 6380,
      password: 'password'
    },
  };

  async get(id: string): Promise<Database> {
    const db = this.DBS[id];

    if (!db) {
      throw new NotFoundException('No db - no problems');
    }

    return plainToClass(Database, this.DBS[id]);
  }

  async list(): Promise<Database[]> {
    return plainToClass(Database, Object.values(this.DBS));
  }}
