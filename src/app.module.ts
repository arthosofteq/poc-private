import { Module } from '@nestjs/common';
import { CustomDatabaseProvider } from 'src/providers/custom.database.provider';
import { DatabaseModule } from 'redisinsight/dist/src/modules/database/database.module';
import { DatabaseProvider } from 'redisinsight/dist/src/modules/database/providers/database.provider';

@Module({
  imports: [
    DatabaseModule.register({
      provide: DatabaseProvider,
      useClass: CustomDatabaseProvider,
    }),
  ],
})
export class AppModule {}
