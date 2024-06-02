import { PreLoadCities1717332360091 } from 'src/migrations/1717332360091-pre-load-cities';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Password123',
        database: 'smart-search',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        // synchronize: true,
        migrationsRun: true,
        migrations: [PreLoadCities1717332360091],
      });

      return dataSource.initialize();
    },
  },
];
