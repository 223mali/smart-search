import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ExtractEntitiesQueryDto } from './dto/extract-entities-query.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search')
  async search(
    @Query() requestQueryParams: ExtractEntitiesQueryDto,
  ): Promise<any> {
    const entities = await this.appService.extractEntities(
      requestQueryParams.searchTerm,
    );
    console.log('🚀 ~ AppController ~ search ~ entities:', entities);
    return entities;
  }
}
