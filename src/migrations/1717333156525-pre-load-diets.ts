import { MigrationInterface, QueryRunner } from 'typeorm';

export class PreLoadDiets1717333156525 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('diet');
    if (!tableExists) {
      await queryRunner.query(`
      CREATE TABLE diet (
          id INTEGER PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL
      )
  `);
    }
    await queryRunner.query(`
        INSERT INTO diet (name) VALUES
        ('Vegan'), ('Vegetarian'), ('Keto'), ('Paleo'), ('Mediterranean'),
        ('Low-Carb'), ('Gluten-Free'), ('Dairy-Free'), ('Pescatarian'), ('Whole30')
    `);
  }

  public async down(): Promise<void> {}
}
