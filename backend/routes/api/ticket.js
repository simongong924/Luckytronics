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
});

module.exports = router;
