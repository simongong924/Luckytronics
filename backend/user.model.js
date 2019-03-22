const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    user_email: {
        type: String
    },
    user_password: {
        type: String
    },
    user_name: {
        type: String
    },
    user_company: {
        type: String
    },
    user_role: {
        type: String
    },
    user_hasAgreed: {
        type: Boolean
    }
});

module.exports = mongoose.model('User', User);
