import { Inject, Injectable } from '@nestjs/common';
import { DataSource, In } from 'typeorm';
import { City } from './models/city.entity';
import { Brand } from './models/brand.entity';
import { DishType } from './models/dish-type.entity';
import { Diet } from './models/diet.entity';

@Injectable()
export class AppService {
  private dataSource: DataSource;
  constructor(
    @Inject('DATA_SOURCE')
    dataSource: DataSource,
  ) {
    this.dataSource = dataSource;
  }

  async extractEntities(searchTerm: string) {
    // Split the searchTerm into words
    const terms = searchTerm.split(/\s+/);
    console.log('🚀 ~ AppService ~ extractEntities ~ terms:', terms);

    // Create a single query using UNION ALL to check all entities
    const query = `
    SELECT id,name,  'city' as 'type'  FROM city WHERE name IN (${terms.map((value) => `'${value}'`)})
    UNION ALL
    SELECT id,name, 'brand' as 'type' FROM brand WHERE name IN (${terms.map((value) => `'${value}'`)})
    UNION ALL
    SELECT id,name, 'dishType' as 'type' FROM dish_type WHERE name IN (${terms.map((value) => `'${value}'`)})
    UNION ALL
    SELECT id,name, 'diet' as 'type' FROM diet WHERE name IN (${terms.map((value) => `'${value}'`)})
  `;

    const result = await this.dataSource.query(query, terms);

    return result;
  }
}
