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
        return res.badRequest({error: err});
      } else {
        res.view('login-paciente', {data:createdData});
      }
    });
  },
  Login: function (req,res) {
    res.view('login-paciente');
  },
  Home: function (req,res) {
    var key = req.body.cedula;
    Paciente.findOne({cedula:key}).exec(function(err, data){
      if (err) {return res.badRequest({error: err})}
      res.view('paciente-home', {paciente: data});  

    });
  },
  Buscar: function (req,res) {
    var key = req.body.cedula;
    Paciente.findOne({cedula:key}).exec(function (err, data) {
      if(err){return res.badRequest({error:err})}
      res.view('doctor',{ paciente:data });
    });
  },
  cambiar: function (req,res) {
    var key = req.body.cedula;
    Paciente.update({cedula:key},{registro:req.body}).exec(function (err, update) {
      if (err) { return res.badRequest({error:err}) }
      res.json({data:update});
    });
  }
};
