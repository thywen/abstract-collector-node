const mongoose = require('mongoose');
const express = require('express');
require('../models/abstract');
const Abstract = mongoose.model('abstracts');
const router = express.Router();

class AbstractsController {
  static showAbstracts(req, res) {
    Abstract.find({})
      .sort({ date: 'desc' }).then(abstracts => {
        res.render('abstracts/abstracts', {
          abstracts: abstracts
        })
      })
  }

  static showAddAbstracts(req, res) {
    res.render('abstracts/add')
  }


  static addAbstract(req, res) {
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
      let newUser = {
        title: req.body.title,
        details: req.body.details
      }
      new Abstract(newUser)
        .save()
        .then(abstract => {
          res.redirect('/abstracts')
        })
    }
  }
}

router.get('/', AbstractsController.showAbstracts)
router.get('/add', AbstractsController.showAddAbstracts)
router.post('/', AbstractsController.addAbstract)

module.exports = router;
