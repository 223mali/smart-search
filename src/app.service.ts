import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { EntityType } from './types/entity.type';

@Injectable()
export class AppService {
  private dataSource: DataSource;
  constructor(
    @Inject('DATA_SOURCE')
    dataSource: DataSource,
  ) {
    this.dataSource = dataSource;
  }

  buildSearchTerm(termList: string[]) {
    let searchString = '';
    termList.map((value, idx) => {
      if (idx === termList.length - 1) {
        searchString += `name LIKE '%${value}%'`;
      } else {
        searchString += `name LIKE '%${value}%' OR
        
        `;
      }
    });
    return searchString;
  }

  async extractEntities(searchTerm: string): Promise<EntityType[]> {
    // Split the searchTerm into words and filter out words with less than 3 characters
    const terms = searchTerm.split(/\s+/);
    const filteredTerms = terms.filter((term) => term.length > 2);

    // Create a single query using UNION ALL to check all entities
    const query = `
    SELECT id,name,  'city' as 'type'  FROM city WHERE ${this.buildSearchTerm(filteredTerms)}
    UNION ALL
    SELECT id,name, 'brand' as 'type' FROM brand WHERE ${this.buildSearchTerm(filteredTerms)}
    UNION ALL
    SELECT id,name, 'dishType' as 'type' FROM dish_type WHERE ${this.buildSearchTerm(filteredTerms)}
    UNION ALL
    SELECT id,name, 'diet' as 'type' FROM diet WHERE ${this.buildSearchTerm(filteredTerms)}
  `;

    const result = await this.dataSource.query(query, filteredTerms);

    return result as EntityType[];
  }
}
