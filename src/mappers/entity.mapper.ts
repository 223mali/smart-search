import { ExtractEntitiesResponseDto } from 'src/dto/extract-entities-response.dto';
import { EntityType } from 'src/types/entity.type';

export class EntityMapper {
  static mapEntities(entities: EntityType[]): ExtractEntitiesResponseDto[] {
    const newList = entities.map((entity) => {
      const type = entity.type;
      delete entity.type;
      return { [type]: entity };
    });
    return newList;
  }
}
