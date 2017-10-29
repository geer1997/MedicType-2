/**
 * Paciente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'connection',
  tableName: 'Paciente',
  attributes: {
    id: {
      type: 'integer',
    },
    Nombre: {
      type: 'string'
    },
    Apellido: {
      type: 'string'
    },
    Cedula: {
      type: 'integer',
    },
    FNacimiento: {
      type: 'string'
    },
    TipoSangre: {
      type: 'string'
    },
    Sexo: {
      type: 'string'
    },
    NAptoCasa: {
      type: 'string'
    },
    Urbanizacion: {
      type: 'string'
    },
    Calle: {
      type: 'string'
    },
    Ciudad: {
      type: 'string'
    },
    nombreCompleto: function () {
    	return this.Nombre+' 'this.Apellido;
    };
  }
};
