/**
 * MedicoController
 *
 * @description :: Server-side logic for managing Medicoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	inciar: function(req,res) {
		res.view('/doctor/home');
	},
	Atender: function (req, res) {
		res.view('/doctor/panel',res.json());
	}
};

