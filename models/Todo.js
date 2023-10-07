const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
        "text": {
            type: String,
            require: true,
        },
        "progress": {
            type: Number,
            default: 0
        }
    },
    {timestamps: true}
)

const Todo = new mongoose.model('todos', TodoSchema)

module.exports = Todo;