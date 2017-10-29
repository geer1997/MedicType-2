/**
 * Consulta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'connection',
  tableName: 'Consulta',
  attributes: {
  	id: {
  		type: 'integer';
  	}
  	tipo:{
  		type: 'string';
  	},
  	precio:{
  		type: 'double';	
  	},
  	fecha:{
  		type: 'datetime';
  	},
  	talla:{
  		type: 'float';
  	},
  	peso:{
  		type: 'float';
  	},
  	fCardiaca:{
  		type: 'integer';
  	},
  	fRespiratoria:{	
  		type: 'integer';
  	},
  	Tension:{	
  		type: 'string';
  	}
  	Temperatura:{
  		type: 'float';
  	}
  	Paciente:{
  		model: 'paciente'
  	},
  	Diagnostico:{
  		model:'patologia'
  	},
  	Doctor: {
  		model: 'medico'
  	},
    Recipe: {
      collection: 'medicamento',
      via: 'Consulta',
      dominant: true
    }
  }
};

