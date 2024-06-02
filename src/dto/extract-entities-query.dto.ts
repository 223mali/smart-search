import { ApiProperty } from '@nestjs/swagger';

export class ExtractEntitiesQueryDto {
  @ApiProperty()
  searchTerm: string;
}
