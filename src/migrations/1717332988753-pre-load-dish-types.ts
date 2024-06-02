import { MigrationInterface, QueryRunner } from 'typeorm';

export class PreLoadDishTypes1717332988753 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('dish_type');
    if (!tableExists) {
      await queryRunner.query(`
      CREATE TABLE dish_type (
          id INTEGER PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL
      )
  `);
    }
    await queryRunner.query(`
        INSERT INTO dish_type (name) VALUES
        ('Pasta'), ('Pizza'), ('Salad'), ('Burger'), ('Sushi'),
        ('Tacos'), ('Steak'), ('Sandwich'), ('Soup'), ('Curry')
    `);
  }

  public async down(): Promise<void> {}
}
