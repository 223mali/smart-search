import { MigrationInterface, QueryRunner } from 'typeorm';

export class PreLoadDishTypes1717332988753 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO dish_type (name) VALUES
        ('Pasta'), ('Pizza'), ('Salad'), ('Burger'), ('Sushi'),
        ('Tacos'), ('Steak'), ('Sandwich'), ('Soup'), ('Curry')
    `);
  }

  public async down(): Promise<void> {}
}
