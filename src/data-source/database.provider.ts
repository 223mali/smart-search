import { PreLoadCities1717332360091 } from 'src/migrations/1717332360091-pre-load-cities';
import { PreLoadDishTypes1717332988753 } from 'src/migrations/1717332988753-pre-load-dish-types';
import { PreLoadDiets1717333156525 } from 'src/migrations/1717333156525-pre-load-diets';
import { PreLoadBrands1717333263304 } from 'src/migrations/1717333263304-pre-load-brands';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        migrationsRun: true,
        migrations: [
          PreLoadCities1717332360091,
          PreLoadDishTypes1717332988753,
          PreLoadDiets1717333156525,
          PreLoadBrands1717333263304,
        ],
      });

      return dataSource.initialize();
    },
  },
];
