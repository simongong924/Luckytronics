const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// const saltRounds = 10;

let UserSchema = new Schema({
    email: {
        type: String, required: true, unique: true
    },
    password: {
         type: String, required: true
    },
    name: {
        type: String
    },
    company: {
        type: String
    },
    role: {
        type: String
    },
      hasAgreed: {
        type: Boolean
    }
});

module.exports = mongoose.model('users', UserSchema);

//
// UserSchema.pre('save', function(next) {
//   // Check if document is new or a new password has been set
//   if (this.isNew || this.isModified('user_password')) {
//     // Saving reference to this because of changing scopes
//     const document = this;
//     bcrypt.hash(document.user_password, saltRounds,
//       function(err, hashedPassword) {
//       if (err) {
//         next(err);
//       }
//       else {
//         document.user_password = hashedPassword;
//         next();
//       }
//     });
//   } else {
//     next();
//   }
// });
//
//
// UserSchema.methods.isCorrectPassword = function(password, callback){
//   bcrypt.compare(password, this.user_password, function(err, same) {
//     if (err) {
//       callback(err);
//     } else {
//       callback(err, same);
//     }
//   });
// }
