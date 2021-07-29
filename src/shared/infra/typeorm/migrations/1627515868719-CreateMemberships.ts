import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMemberships1627515868719 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "memberships",
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
            name: "plan_id",
            type: "uuid",
          },
          {
            name: "payment_type_id",
            type: "uuid",
          },
          {
            name: "due_date",
            type: "date",
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
            name: "FKMembershipClient",
            referencedTableName: "clients",
            referencedColumnNames: ["id"],
            columnNames: ["client_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKMembershipPlan",
            referencedTableName: "plans",
            referencedColumnNames: ["id"],
            columnNames: ["plan_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKMembershipPaymentType",
            referencedTableName: "payment_types",
            referencedColumnNames: ["id"],
            columnNames: ["payment_type_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("memberships");
  }
}
