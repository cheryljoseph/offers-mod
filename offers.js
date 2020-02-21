const request = require('request');
const cryptojs = require('crypto-js/sha256');

module.exports = {
	modifyOffersRequest: function (req, res, next) {
		console.log('Calling modifyOffersRequest.');

		console.log('req: ' + req);
		console.log('req.body: ' + req.body);

		process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

	
		for(var i = 0;i< req.body.offers.length; i++)
		{
			if (i % 2 == 0) {
				req.body.offers[i].status = 'ACTIVE';
			} else {
				req.body.offers[i].status = 'REDEEMED';
			}
			console.log(req.body.offers[i].winetId);
		}

	
		res.send(req.body.offers);
	}


};
