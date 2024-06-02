import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ExtractEntitiesQueryDto } from './dto/extract-entities-query.dto';
import { EntityMapper } from './mappers/entity.mapper';
import { ExtractEntitiesResponseDto } from './dto/extract-entities-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search')
  async search(
    @Query() requestQueryParams: ExtractEntitiesQueryDto,
  ): Promise<ExtractEntitiesResponseDto[]> {
    const entities = await this.appService.extractEntities(
      requestQueryParams.searchTerm,
    );

    return EntityMapper.mapEntities(entities);
  }
}
