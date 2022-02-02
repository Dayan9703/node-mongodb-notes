const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    desciption: {
        type: String,
        require: true
    },


}, {
    timestamps: true
})

module.export = model('Note', NoteSchema);