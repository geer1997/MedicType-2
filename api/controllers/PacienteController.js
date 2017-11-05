/**
 * PacienteController
 *
 * @description :: Server-side logic for managing Pacientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  Registrar: function(req, res) {
    res.view('registro');
  },

  Home: function(req, res) {
    res.view('paciente-home');
  },
  

  Crear: function(req, res, next, callback) {
    var params = req.body;
    Paciente.create(params, function(err, createdData) {
      if (err) {
        return res.badRequest({error: err});
      } else {
        res.view('registrado', {Paciente:createdData});
      }
    });
  },

  BuscarPorCedula: function(req, res, next, callback) {
    var ced = req.body;
    Paciente.findOne(ced, function(err, createdData){
      if (err) {
        return res.badRequest({error: err});
      } else {
        res.view('registrado', {Paciente:createdData});
      }
    });
  },

  Modificar: function(req, res) {
    Paciente.findOne({id:req.params.id}).exec(function (err, paciente) {
      if (err) {
        res.send(500,{error:err});
      }
      res.view('modificar-paciente', {Paciente:paciente});
    });
  },

  Eliminar: function(req, res) {
    Paciente.destroy({id:req.params.id}).exec(function (err) {
      if (err) {
        res.send(500,{error:err});
      }
      res.redirect('/paciente-home');
    });
    return false;
  },

  Update: function(req, res) {
    Paciente.update({id:req.params.id}, {Nombre:req.body.Nombre, Apellido:req.body.Apellido, Sexo:req.body.Sexo, TSangre:req.body.TSangre, FNacimiento:req.body.FNacimiento, NAptoCasa:req.body.NAptoCasa, Calle:req.body.Calle, Ciudad:req.body.Ciudad }, function(err, createdData){
      if (err) {
        console.log("nonononononn");
        return res.badRequest({error: err});
      } else {
        console.log(createdData);
        res.view('registrado', {Paciente:createdData[0]});
      }
    });
    }
  
};