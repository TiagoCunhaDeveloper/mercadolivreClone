// eslint-disable-next-line no-unused-vars
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('produtos', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('descricao').notNullable();
    table.decimal('valor').notNullable();
    table.string('parcelas').notNullable();
    table.string('img').notNullable();

    table.integer('id_vendedor')
      .notNullable()
      .references('id')
      .inTable('vendedor')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('produtos');
}
