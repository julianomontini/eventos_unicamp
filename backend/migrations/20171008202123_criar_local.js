
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Local', function(t){
        t.increments('id').unsigned().primary();
        t.timestamps(false, true)
        t.string("Nome");
    }).then(() => {
        return knex.schema.createTable('LocalResponsavel', function(t){
            t.integer("UsuarioId").unsigned().references('id').inTable('Usuario');
            t.integer("LocalId").unsigned().references('id').inTable('Local');
        })
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('LocalResponsavel');
    return knex.schema.dropTable('Local');
};
