import { ExtractEntitiesResponseDto } from 'src/dto/extract-entities-response.dto';
import { EntityType } from 'src/types/entity.type';

export class EntityMapper {
  static mapEntities(entities: EntityType[]): ExtractEntitiesResponseDto[] {
    const grouping = {};
    const newList = [];
    const duplicateItems = [];
    entities.map((entity) => {
      if (grouping[entity.type]) {
        duplicateItems.push(entity);
        return;
      }
      const entityType = entity.type;
      delete entity.type;
      grouping[entityType] = entity;
    });
    newList.push(grouping);

    duplicateItems.map((entity) => {
      const entityType = entity.type;

      delete entity.type;

      newList.push({ ...grouping, [entityType]: entity });
    });

    return newList;
  }
}
