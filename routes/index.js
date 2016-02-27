var express = require('express');
var router = express.Router();
var firewire = require("firewire");

firewire.load = {
	url : "https://firestack-bc.firebaseio.com/",
	timer : 500
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'firestack' });
});

/*Dynamic Page and Data Loader */
router.get('/:page/id/:instance', function(req, res, next) {

	firewire.wire(req,res,firewire.load,[
		{":instance" : "child"}
	]);

});

module.exports = router;