/**
 * Alergias.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'connection',
  tableName: 'Alergias',
  attributes: {
    Alergias: {
      type: 'string'
    },
    Paciente: {
      model: 'paciente'
    }
  },
  migrate: 'safe',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false
};
