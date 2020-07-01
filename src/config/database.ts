import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { configService } from './config.service'
import * as path from 'path'
import * as PostgressConnectionStringParser from "pg-connection-string"

const buildOptionsFromConnectionString = (databaseUrl: string): TypeOrmModuleOptions => {
  const connectionOptions = PostgressConnectionStringParser.parse(databaseUrl)

  return {
    type: "postgres",
    host: connectionOptions.host,
    port: parseInt(connectionOptions.port),
    username: connectionOptions.user,
    password: connectionOptions.password,
    database: connectionOptions.database,
    extra: {
      ssl: connectionOptions.ssl
    }
  }
}

const buildOptionsFromDbVariables = () :TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: configService.getValue('DB_HOST'),
    port: parseInt(configService.getValue('DB_PORT')),
    username: configService.getValue('DB_USER'),
    password: configService.getValue('DB_PASSWORD', ""),
    database: configService.getValue('DB_NAME')
  }
}

const buildOptions = () :TypeOrmModuleOptions => {
  if (process.env.DATABASE_URL) {
    return buildOptionsFromConnectionString(process.env.DATABASE_URL)
  }

  return buildOptionsFromDbVariables() 
}

export const TYPE_ORM_MODULE_OPTIONS: TypeOrmModuleOptions = Object.assign(
  buildOptions(),
  {
    namingStrategy: new SnakeNamingStrategy(),
    entities: [path.join(__dirname, '../**', '*.entity{.ts,.js}')],
  }
)
