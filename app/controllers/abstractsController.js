const router = require('express').Router();
const abstractValidator = require('../validators/abstractValidator');
const abstractDao = require('../dao/abstractDao');

const showAbstracts = async (req, res) => {
    abstracts = await abstractDao.getAbstracts()
    res.render('abstracts/abstracts', {
        abstracts: abstracts
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
        };
        if (abstractDao.saveAbstract(newAbstract)) {
            req.flash('success_msg', 'Abstract added')
            res.redirect('/abstracts')
        } else {
            req.flash('error_msg', 'An unknow error occured')
            res.render('abstracs/add', {
                errors: errors,
                title: req.body.title,
                details: req.body.details
            })
        }
    }
}

const editAbstracts = async (req, res) => {
    abstract = await abstractDao.findOneAbstract(req.params.id)
    res.render('abstracts/edit', {
        abstract: abstract
    })
}

const updateAbstract = async (req, res) => {
    abstract = await abstractDao.findOneAbstract(req.params.id)
    abstract.title = req.body.title
    abstract.details = req.body.details
    if (abstractDao.saveAbstract(abstract)) {
        req.flash('success_msg', 'Abstract updated')
        res.redirect('/abstracts')
    }
}

const deleteAbstract = (req, res) => {
    if (abstractDao.deleteAbstract(req.params.id)) {
        req.flash('success_msg', 'Abstract removed')
        res.redirect('/abstracts')
    }
}

router.get('/', showAbstracts)
router.post('/', addAbstract)
router.put('/:id', updateAbstract)
router.delete('/:id', deleteAbstract)
router.get('/add', showAddAbstracts)
router.get('/edit/:id', editAbstracts)

module.exports = router;
