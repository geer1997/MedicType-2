/**
 * Medicamento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'connection',
  	tableName: 'Medicamento',
	attributes: {
	  	id:{
			type: 'int'
	  	},
	  	Nombre:{
	  		type: 'string'
	  		required: true;
	  	},
	  	Consulta: {
	  		collection: 'consulta',
	      	via: 'Recipe'
	  	}
	}
};

