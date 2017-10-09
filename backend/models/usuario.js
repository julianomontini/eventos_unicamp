const Model = require('objection').Model;

class Usuario extends Model{
    static get tableName(){
        return "Usuario";
    }

    getNome()
}