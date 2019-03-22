const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const PORT = 5000;

let User = require('./user.model');
let Ticket = require('./ticket.model');

app.use(cors());
app.use(bodyParser.json());

const dbUrl = "mongodb+srv://admin_simon:1q2w3e4r@luckytronicsdb-cdpf5.mongodb.net/user"

mongoose.connect(dbUrl, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

userRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send('data is not found');
        else
            user.user_description = req.body.user_description;
            user.user_responsible = req.body.user_responsible;
            user.user_priority = req.body.user_priority;
            user.user_completed = req.body.user_completed;

            user.save().then(user => {
                res.json('User updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

userRoutes.route('/addTicket').post(function(req, res) {
  let ticket = new Ticket(req.body);
  ticket.save()
      .then(ticket => {
          res.status(200).json({'ticket': 'ticket added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new ticket failed');
      });
});

app.use('/users', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
