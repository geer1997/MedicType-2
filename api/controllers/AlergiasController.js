/**
 * AlergiasController
 *
 * @description :: Server-side logic for managing Alergias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	iniciar: function (req,res) {
		res.view('completar-historia');
	},
	registrar: function (req,res) {
		// body...
	}	
};

