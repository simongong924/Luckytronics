const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ticket = new Schema({
    ticket_subject: {
        type: String
    },
    ticket_details: {
        type: String
    },
    ticket_name: {
        type: String
    },
    ticket_email: {
        type: String
    },
    ticket_hasAgreed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Ticket', Ticket);
