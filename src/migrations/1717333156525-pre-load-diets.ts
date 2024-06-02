import { MigrationInterface, QueryRunner } from 'typeorm';

export class PreLoadDiets1717333156525 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO diet (name) VALUES
        ('Vegan'), ('Vegetarian'), ('Keto'), ('Paleo'), ('Mediterranean'),
        ('Low-Carb'), ('Gluten-Free'), ('Dairy-Free'), ('Pescatarian'), ('Whole30')
    `);
  }

  public async down(): Promise<void> {}
}
