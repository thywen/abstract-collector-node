const expect = require('chai').expect;
const mongoose = require('mongoose')
require('../../app/models/abstract')
const Abstract = mongoose.model('abstract')

describe('Abstract', () => {
    it('should require a title', () => {
        const abstract = new Abstract();

        abstract.validate( (err) => {
            expect(err.errors.title).to.exist;
        })
    }) 

    it('should require a description', () => {
        const abstract = new Abstract();

        abstract.validate( (err) => {
            expect(err.errors.details).to.exist;
        })
    })


    it('should add a date', () => {
        let newAbstract = {
            title: "asdf",
            details: "qwer"
          }
        const abstract = new Abstract(newAbstract);

        expect(abstract.date).to.be.not.null
    })

})
