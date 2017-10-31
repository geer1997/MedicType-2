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
	Home: function (req, res) {
		Medico.findOne({cedula:req.body.cedula}).exec(function (err, doc) {
			if (err) {res.send(500,{error:'DB_Error'});}
			res.view('doctor', {doc:doc})
		});
	},
	Consulta: function(req, res) {

	}
};

