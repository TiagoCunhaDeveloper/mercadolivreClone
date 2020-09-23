// eslint-disable-next-line no-unused-vars
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('vendedor', (table) => {
    table.increments('id').primary();
    table.string('localizacao').notNullable();
    table.integer('numero_vendas').notNullable();
    table.integer('classificacao').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('vendedor');
}
