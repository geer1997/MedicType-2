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
			if (err) {return res.badRequest({error: err})}
			res.view('doctor', {medico:doc})
		});
	},
	Consulta: function(req, res) {

	}
};

