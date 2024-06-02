import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  private dataSource: DataSource;
  constructor(
    @Inject('DATA_SOURCE')
    dataSource: DataSource,
  ) {
    this.dataSource = dataSource;
  }

  parseSearchTerm(termList: string[]) {
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

  async extractEntities(searchTerm: string) {
    // Split the searchTerm into words
    const terms = searchTerm.split(/\s+/);

    // Create a single query using UNION ALL to check all entities
    const query = `
    SELECT id,name,  'city' as 'type'  FROM city WHERE ${this.parseSearchTerm(terms)}
    UNION ALL
    SELECT id,name, 'brand' as 'type' FROM brand WHERE ${this.parseSearchTerm(terms)}
    UNION ALL
    SELECT id,name, 'dishType' as 'type' FROM dish_type WHERE ${this.parseSearchTerm(terms)}
    UNION ALL
    SELECT id,name, 'diet' as 'type' FROM diet WHERE ${this.parseSearchTerm(terms)}
  `;

    const result = await this.dataSource.query(query, terms);

    return result;
  }
}
