import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { configService } from './config.service';
import * as path from 'path'

export const TYPE_ORM_MODULE_OPTIONS: TypeOrmModuleOptions = {
  type: 'postgres',
  host: configService.getValue('DB_HOST'),
  port: parseInt(configService.getValue('DB_PORT')),
  username: configService.getValue('DB_USER'),
  password: configService.getValue('DB_PASSWORD', ""),
  database: configService.getValue('DB_NAME'),
  namingStrategy: new SnakeNamingStrategy(),
  entities: [path.join(__dirname, '../**', '*.entity{.ts,.js}')],
};
