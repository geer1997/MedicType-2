/**
 * ComponentesMedicamento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'connection',
  tableName: 'Componentes_Medicamento',
  attributes: {
    Nombre: {
      type: 'string'
    },
    Medicamento: {
      model: 'medicamento'
    }
  },
  migrate: 'safe',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false
};
