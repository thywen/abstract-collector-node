const mongoose = require('mongoose');
const express = require('express');
require('../models/abstract');
const Abstract = mongoose.model('abstract');
const router = express.Router();

const showAbstracts = (req, res) => {
  Abstract.find({})
    .sort({ date: 'desc' }).then(abstracts => {
      res.render('abstracts/abstracts', {
        abstracts: abstracts
      })
    })
}

const showAddAbstracts = (req, res) => {
  res.render('abstracts/add')
}


const addAbstract = (req, res) => {
  let errors = []
  if (!req.body.title) {
    errors.push({ text: "Please add a title" })
  }
  if (!req.body.details) {
    errors.push({ text: "Please add a details" })
  }
  if (errors.length > 0) {
    res.render('abstracts/add', {
      errors: errors,
      title: req.body.title,
      details: req.body.details
    })
  } else {
    let newAbstract = {
      title: req.body.title,
      details: req.body.details
    }
    new Abstract(newAbstract)
      .save()
      .then(abstract => {
        res.redirect('/abstracts')
      })
  }
}

router.get('/', showAbstracts)
router.get('/add', showAddAbstracts)
router.post('/', addAbstract)

module.exports = router;
