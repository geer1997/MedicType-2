/**
 * MedicoController
 *
 * @description :: Server-side logic for managing Medicoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  Login: function(req, res) {
    res.view('login-doctor');
  },
  Home: function(req, res) {
    Medico.findOne({ cedula: req.body.cedula }).exec(function(err, doc) {
      if (err) { return res.badRequest({ error: err }) }
      Consulta.query(
        'SELECT Paciente.Apellido, Paciente.Nombre' +
        'From Consulta INNER JOIN medico on Consulta.Doctor =' + req.body.id +
        'INNER JOIN Paciente on Paciente.id = Consulta.Paciente Where consulta.fecha =' + new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate(),
        function(err, rawResult) {
          if (err) { return res.serverError(err); }
          var pacientes = rawResult.json();
          res.view('panel', { doctor: doc, paciente: paciente });
        });
    })
  },
  Registrar: function(req, res) {
    var params = req.body;
    Medico.create(params, function(err, createdData) {
      if (err) { return res.badRequest({ error: err }) }
      res.view('doctor', { medico: createdData });
    });
  },
  Consulta: function(req, res) {

  }

};
