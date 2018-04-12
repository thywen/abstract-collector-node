const mongoose = require('mongoose');
const express = require('express');
require('../models/abstract');
const Abstract = mongoose.model('abstract');
const router = express.Router();
const abstractValidator = require('../../app/controllers/validators/abstractValidator')


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
  let errors = abstractValidator.validateAbstractData(req.body)
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

const editAbstracts = (req, res) => {
  Abstract.findOne({
    _id: req.params.id
  })
  .then(abstract => {
    res.render('abstracts/edit', {
      abstract: abstract
    })
  })
  
}

router.get('/', showAbstracts)
router.get('/add', showAddAbstracts)
router.get('/edit/:id', editAbstracts)
router.post('/', addAbstract)

module.exports = router;
