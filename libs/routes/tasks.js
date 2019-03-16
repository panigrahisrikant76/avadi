var express = require('express');
var passport = require('passport');
var router = express.Router();

var libs = process.cwd() + '/libs/';
var log = require(libs + 'log')(module);

var db = require(libs + 'db/mongoose');
var Tasks = require(libs + 'model/tasks');

router.get('/', passport.authenticate('bearer', { session: false }), function(req, res) {
	
	Tasks.find(function (err, tasks) {
		if (!err) {
			return res.json(tasks);
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
	
	var task = new Tasks({
		title: req.body.title,
		assigned_to: req.body.assigned_to,
		description: req.body.description
	});

	task.save(function (err) {
		if (!err) {
			log.info("New task created with id: %s", task.id);
			return res.json({ 
				status: 'OK', 
				task:task 
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
	
	Tasks.findById(req.params.id, function (err, task) {
		
		if(!task) {
			res.statusCode = 404;
			
			return res.json({ 
				error: 'Not found' 
			});
		}
		
		if (!err) {
			return res.json({ 
				status: 'OK', 
				task:task 
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
	var taskId = req.params.id;

	Tasks.findById(taskId, function (err, task) {
		if(!task) {
			res.statusCode = 404;
			log.error('Tasks with id: %s Not Found', taskId);
			return res.json({ 
				error: 'Not found' 
			});
		}

		task.title = req.body.title;
		task.description = req.body.description;
		task.assigned_to = req.body.assigned_to;
	
		
		task.save(function (err) {
			if (!err) {
				log.info("Tasks with id: %s updated", task.id);
				return res.json({ 
					status: 'OK', 
					task:task 
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
