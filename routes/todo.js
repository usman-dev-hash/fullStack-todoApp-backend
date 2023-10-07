const { Router } = require('express')
const router = Router()
const todoController = require('../controllers/TodoController')

router.get('/', todoController.getAllTodos)
router.post('/store', todoController.storeTodo)
router.post('/update', todoController.updateTodo)
router.post('/delete', todoController.deleteTodo)

module.exports = router;