import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClients1627514789655 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clients",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "birthdate",
            type: "date",
          },
          {
            name: "gender",
            type: "varchar",
          },
          {
            name: "document",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "cellphone",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clients");
  }
}
