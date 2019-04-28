const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let File = new Schema({
    file: {
        type: String
    }
});

module.exports = mongoose.model('File', Files);
