import { MigrationInterface, QueryRunner } from 'typeorm';

export class PreLoadCities1717332360091 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('city');
    if (!tableExists) {
      await queryRunner.query(`
      CREATE TABLE city (
          id INTEGER PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL
      )
  `);
    }
    queryRunner.query(`
    INSERT INTO city (name) VALUES
            ('New York'), ('Los Angeles'), ('Chicago'), ('Houston'), ('Phoenix'),
            ('Philadelphia'), ('San Antonio'), ('San Diego'), ('Dallas'), ('San Jose'),('London')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
