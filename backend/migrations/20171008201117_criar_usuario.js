
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Usuario', function(t){
    t.increments('id').unsigned().primary();
    t.timestamps(false, true)
    t.string("Nome").notNullable();
    t.string("Email").unique().notNullable();
    t.string("Senha").notNullable();
    t.boolean("Aprovador");
    t.boolean("Notificador");
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Usuario')
};
