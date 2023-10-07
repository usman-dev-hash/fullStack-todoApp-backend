const path = require('path')
const Todo = require(path.join(__dirname, '../models/Todo'))

const getAllTodos = async (req, res) => {
    Todo.find()
        .then((response) => {
            res.json({response})
        })
        .catch((error) => {
            throw new Error(`Error while fetch all todos ${error}`)
        })
}

const storeTodo = async (req, res) => {

    const storeData = new Todo(req.body)

    storeData.save()
        .then((response) => {
            console.log(`todo store successfully in db`)
            res.json({
                response: response
            })
        })
        .catch((error) => {
            console.log(`error while storing todo in db`)
            res.json({
                response: error
            })
        })
}

const updateTodo = async (req, res) => {

    const _id = req.body.id;
    const updatedData = req.body;

    Todo.findByIdAndUpdate(_id, {$set: updatedData})
        .then((response) => {
            console.log(`todo updated successfully in db`)
            res.json({
                message: `Todo of (_id: ${_id}) updated successfully!`
            })
        })
        .catch((error) => {
            console.log(`error while updating todo in db`)
            res.json({
                response: error
            })
        })
}

const deleteTodo = async (req, res) => {

    const _id = req.body.id;

    Todo.findByIdAndRemove(_id)
        .then((response) => {
            console.log(`todo deleted successfully in db`)
            res.json({
                message: `Todo of (_id: ${_id}) deleted successfully!`
            })
        })
        .catch((error) => {
            console.log(`error while deleting todo in db`)
            res.json({
                response: error
            })
        })
}

module.exports = {getAllTodos, storeTodo, updateTodo, deleteTodo}