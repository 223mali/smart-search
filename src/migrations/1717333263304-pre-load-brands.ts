import { MigrationInterface, QueryRunner } from 'typeorm';

export class PreLoadBrands1717333263304 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO brand (name) VALUES
            ('McDonald''s'), ('Starbucks'), ('Subway'), ('KFC'), ('Burger King'),
            ('Domino''s'), ('Pizza Hut'), ('Taco Bell'), ('Wendy''s'), ('Dunkin''')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
