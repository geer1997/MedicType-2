/**
 * PacienteController
 *
 * @description :: Server-side logic for managing Pacientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  registrar: function(req, res) {
    res.view('/pacientes/registro');
  },
  crear: function(req, res, next, callback) {
    var params = req.body;
    Paciente.create(params, function(err, createdData) {
      if (err) {
        return res.badRequest({
          error: err
        });
      } else {
        return res.json({
          data: createdData
        });
      }
    });
  }
};
