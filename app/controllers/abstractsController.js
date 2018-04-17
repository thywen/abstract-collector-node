const router = require('express').Router();
const abstractValidator = require('../validators/abstractValidator');
var Abstract;

const init = (abstract) => {
  Abstract = abstract;
}

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
        req.flash('success_msg', 'Abstract added')
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

const updateAbstract = (req, res) => {
  Abstract.findOne({
    _id: req.params.id
  })
    .then(abstract => {
      abstract.title = req.body.title
      abstract.details = req.body.details
      abstract.save()
        .then(() => {
          req.flash('success_msg', 'Abstract updated')
          res.redirect('/abstracts')
        })
    })
}

const deleteAbstract = (req, res) => {
  Abstract.remove({
    _id: req.params.id
  }).then(() => {
    req.flash('success_msg', 'Abstract removed')
    res.redirect('/abstracts')
  })
}

router.get('/', showAbstracts)
router.post('/', addAbstract)
router.put('/:id', updateAbstract)
router.delete('/:id', deleteAbstract)
router.get('/add', showAddAbstracts)
router.get('/edit/:id', editAbstracts)

module.exports = { router, init };
