import { MigrationInterface, QueryRunner } from 'typeorm';

export class PreLoadCities1717332360091 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    INSERT INTO city (name) VALUES
            ('New York'), ('Los Angeles'), ('Chicago'), ('Houston'), ('Phoenix'),
            ('Philadelphia'), ('San Antonio'), ('San Diego'), ('Dallas'), ('San Jose'),('London')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
