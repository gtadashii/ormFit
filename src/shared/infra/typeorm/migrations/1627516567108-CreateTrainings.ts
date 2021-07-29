import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTrainings1627516567108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "training_schedules",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "client_id",
            type: "uuid",
          },
          {
            name: "instructor_id",
            type: "uuid",
          },
          {
            name: "excercise_id",
            type: "uuid",
          },
          {
            name: "repetitions",
            type: "numeric",
          },
          {
            name: "day_of_week",
            type: "numeric",
          },
          {
            name: "in_use",
            type: "boolean",
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
        foreignKeys: [
          {
            name: "FKTrainingClient",
            referencedTableName: "clients",
            referencedColumnNames: ["id"],
            columnNames: ["client_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKTrainingUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["instructor_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("training_schedules");
  }
}
