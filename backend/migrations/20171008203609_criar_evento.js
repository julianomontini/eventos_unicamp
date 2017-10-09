
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Evento', function(t){
        t.increments('id').unsigned().primary();
        t.timestamps(false, true)
        t.string("Titulo");
        t.text("Descricao");
        t.text("Observacao");
        t.string("NomeCriador");
        t.string("EmailCriador");
        t.dateTime("Inicio");
        t.dateTime("Fim");
        t.enum('Status', ['aprovado', 'reprovado', 'pendente']).notNullable().default('pendente');
        t.integer('Aprovador').unsigned().references('id').inTable('Usuario');
        t.integer('Local').unsigned().references('id').inTable('Local').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Evento');
};
