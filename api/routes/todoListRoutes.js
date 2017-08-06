'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');


  // todoList Routes
  app.route('/tasks')
    .get(function(req, res, next) {
      todoList.list_all_tasks;
   	  res.render('index', { title: 'Express' });
   	  // console.log('inside get function')
    })
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};