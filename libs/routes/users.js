var express = require('express');
var passport = require('passport');
var router = express.Router();

var libs = process.cwd() + '/libs/';
var log = require(libs + 'log')(module);

var db = require(libs + 'db/mongoose');
var User = require(libs + 'model/user');

router.get('/profile', passport.authenticate('bearer', { session: false }),
    function(req, res) {
        // req.authInfo is set using the `info` argument supplied by
        // `BearerStrategy`.  It is typically used to indicate scope of the token,
        // and used in access control checks.  For illustrative purposes, this
        // example simply returns the scope in the response.
        res.json({ 
        	user_id: req.user.userId, 
            username: req.user.username,
            firstname:req.user.firstName,
            lastname:req.user.lastName,
            emailId:req.user.emailId,
        	scope: req.authInfo.scope 
        });
    }
);
router.get('/', passport.authenticate('bearer', { session: false }), function(req, res) {
	
	User.find(function (err, users) {
		if (!err) {
			return res.json(users);
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
    
    

	var user = new User({
		username: req.body.username,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
        emailId: req.body.emailId,
        password:'lipsrik'
    });

    console.log(user);
    

	user.save(function (err) {
		if (!err) {
            log.info("New user created with id: %s", user.id);
            //Dont show password in created response
            let userInfo = {id:user.id,username:user.username,firstName:user.firstName,lastName:user.lastName
            ,emailId:user.emailId,scope:user.scope}

			return res.json({ 
				status: 'OK', 
				user:userInfo 
			});
		} else {
			if(err.name === 'ValidationError') {
				res.statusCode = 400;
				res.json({ 
					error: err.message 
				});
			} else {
				res.statusCode = 500;
				
				log.error('Internal error(%d): %s', res.statusCode, err.message);
				
				res.json({ 
					error: err.message 
				});
			}
		}
	});
});

module.exports = router;