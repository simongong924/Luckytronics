const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// Load User model
const Ticket = require("../../models/Ticket");
const File = require("../../models/File");

// @route POST api/users/SignUpForm
// @desc SignUpForm user
// @access Public
router.post("/createTicket", (req, res) => {
  // Form validation

  // const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  const newTicket = new User({
    subject: req.body.subject,
    details: req.body.details,
    name: req.body.name,
    email: req.body.email,
  });

  newTicket.save()
    .catch(err => console.log(err));
});


// @access Public
router.post("/createFile", (req, res) => {
  // Form validation

  // const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  const newFile = new File({
    File: req.body.File
  });

  newFile.save()
    .catch(err => console.log(err));
});


router.post('/api/images', parser.single("image"), (req, res) => {
  console.log(req.file) // to see what is returned to you
  const file = {};
  file.url = req.file.url;
  file.id = req.file.public_id;

  file.create(image) // save image information in database
    .then(newImage => res.json(newImage))
    .catch(err => console.log(err));
});

module.exports = router;
