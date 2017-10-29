/**
 * Medico.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'connection',
  tableName: 'Medico',
  attributes: {
  	id:{
  		type: 'int'
  	},
  	Nombre :{
  		type: 'string'
  	},
  	Apellido : {
  		type: 'string'
  	},
  	Cedula : {
  		type: 'int'
  	},
  	CDM : {
  		type: 'int'
  	}
};

