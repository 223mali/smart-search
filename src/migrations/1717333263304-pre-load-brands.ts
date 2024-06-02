import { MigrationInterface, QueryRunner } from 'typeorm';

export class PreLoadBrands1717333263304 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('brand');
    if (!tableExists) {
      await queryRunner.query(`
      CREATE TABLE brand (
          id INTEGER PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL
      )
  `);
    }

    await queryRunner.query(`
            INSERT INTO brand (name) VALUES
            ('McDonald''s'), ('Starbucks'), ('Subway'), ('KFC'), ('Burger King'),
            ('Domino''s'), ('Pizza Hut'), ('Taco Bell'), ('Wendy''s'), ('Dunkin''')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
