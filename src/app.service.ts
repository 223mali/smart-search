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

  // async extractEntities(searchTerm: string) {

  // }
}
