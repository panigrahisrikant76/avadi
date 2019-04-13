var express = require('express');
var passport = require('passport');
var router = express.Router();

var libs = process.cwd() + '/libs/';
var log = require(libs + 'log')(module);

var db = require(libs + 'db/mongoose');
var Customer = require(libs + 'model/customer');

router.get('/', passport.authenticate('bearer', { session: false }), function(req, res) {
	
	Customer.find(function (err, customers) {
		if (!err) {
			return res.json(customers);
		} else {
			res.statusCode = 500;
			
			log.error('Internal error(%d): %s',res.statusCode,err.message);
			
			return res.json({ 
				error: 'Server error' 
			});
		}
	});
});

router.post('/', passport.authenticate('bearer', { session: false }), function(req, res) {
	
	var customer = new Customer({
		customerName: req.body.customerName,
		contactId: req.body.contactId,
		subscriptionId: req.body.subscriptionId
	});

	customer.save(function (err) {
		if (!err) {
			log.info("New customer created with id: %s", customer.id);
			return res.json({ 
				status: 'OK', 
				customer:customer 
			});
		} else {
			if(err.name === 'ValidationError') {
				res.statusCode = 400;
				res.json({ 
					error: 'Validation error' 
				});
			} else {
				res.statusCode = 500;
				
				log.error('Internal error(%d): %s', res.statusCode, err.message);
				
				res.json({ 
					error: 'Server error' 
				});
			}
		}
	});
});

router.get('/:id', passport.authenticate('bearer', { session: false }), function(req, res) {
	
	Customer.findById(req.params.id, function (err, customer) {
		
		if(!article) {
			res.statusCode = 404;
			
			return res.json({ 
				error: 'Not found' 
			});
		}
		
		if (!err) {
			return res.json({ 
				status: 'OK', 
				customer:customer 
			});
		} else {
			res.statusCode = 500;
			log.error('Internal error(%d): %s',res.statusCode,err.message);
			
			return res.json({ 
				error: 'Server error' 
			});
		}
	});
});

router.put('/:id', passport.authenticate('bearer', { session: false }), function (req, res){
	var CustomerId = req.params.id;

	Customer.findById(CustomerId, function (err, customer) {
		if(!article) {
			res.statusCode = 404;
			log.error('Customer with id: %s Not Found', CustomerId);
			return res.json({ 
				error: 'Not found' 
			});
		}

		customer.customerName = req.body.customerName;
		customer.contactId = req.body.contactId;
		article.subscriptionId = req.body.subscriptionId;

		
		customer.save(function (err) {
			if (!err) {
				log.info("Customer with id: %s updated", customer.id);
				return res.json({ 
					status: 'OK', 
					customer:customer 
				});
			} else {
				if(err.name === 'ValidationError') {
					res.statusCode = 400;
					return res.json({ 
						error: 'Validation error' 
					});
				} else {
					res.statusCode = 500;
					
					return res.json({ 
						error: 'Server error' 
					});
				}
				log.error('Internal error (%d): %s', res.statusCode, err.message);
			}
		});
	});
});

module.exports = router;
