const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose');
const passport = require("passport");
// const userRoutes = express.Router();
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const withAuth = require('./middleware');

const users = require("./routes/api/user");
// let Ticket = require('./ticket.model');

// app.use(cors());
// app.use(bodyParser.json());
// app.use(cookieParser());
//
// //// TODO:  make local secrets
// const secret = 'mysecretsshhh';
// const dbUrl = "mongodb+srv://admin_simon:1q2w3e4r@luckytronicsdb-cdpf5.mongodb.net/user"
//
// mongoose.connect(dbUrl, { useNewUrlParser: true });
// const connection = mongoose.connection;
//
// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })
//
//
// app.get('/checkToken', withAuth, function(req, res) {
//   res.sendStatus(200);
// });
//
// // to be modified
// userRoutes.route('/').get(function(req, res) {
//     User.find(function(err, users) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(users);
//         }
//     });
// });
//
// // to be modified
// userRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     User.findById(id, function(err, user) {
//         res.json(user);
//     });
// });
//
// // add new user
// userRoutes.route('/add').post(function(req, res) {
//     let user = new User(req.body);
//     user.save()
//         .then(user => {
//             res.status(200).json({'user': 'user added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new user failed');
//         });
// });
//
// // sign in authenticattion
// userRoutes.route('/authenticate').post(function(req, res) {
//   const { user_email, user_password } = req.body;
//   console.log(user_email);
//   User.findOne({user_email}, function(err, user) {
//     if (err) {
//       console.error(err);
//       res.status(500)
//         .json({
//         error: 'Internal error please try again'
//       });
//     } else if (!user) {
//       res.status(401)
//         .json({
//           error: 'Incorrect email or password'
//         });
//     } else {
//       user.isCorrectPassword(user_password, function(err, same) {
//         if (err) {
//           res.status(500)
//             .json({
//               error: 'Internal error please try again'
//           });
//         } else if (!same) {
//           res.status(401)
//             .json({
//               error: 'Incorrect email or password'
//           });
//         } else {
//           // Issue token
//           const payload = { user_email };
//           const token = jwt.sign(payload, secret, {
//             expiresIn: '1h'
//           });
//           res.cookie('token', token, { httpOnly: true })
//             .sendStatus(200);
//         }
//       });
//     }
//   });
// });
//
// // to be modified
// userRoutes.route('/update/:id').post(function(req, res) {
//     User.findById(req.params.id, function(err, user) {
//         if (!user)
//             res.status(404).send('data is not found');
//         else
//             user.user_description = req.body.user_description;
//             user.user_responsible = req.body.user_responsible;
//             user.user_priority = req.body.user_priority;
//             user.user_completed = req.body.user_completed;
//
//             user.save().then(user => {
//                 res.json('User updated');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });
//
// // add new tickets
// // to do check token
// userRoutes.route('/addTicket').post(function(req, res) {
//   let ticket = new Ticket(req.body);
//   ticket.save()
//       .then(ticket => {
//           res.status(200).json({'ticket': 'ticket added successfully'});
//       })
//       .catch(err => {
//           res.status(400).send('adding new ticket failed');
//       });
// });
//
// app.use('/users', userRoutes);
//
// app.listen(PORT, function() {
//     console.log("Server is running on Port: " + PORT);
// });


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
