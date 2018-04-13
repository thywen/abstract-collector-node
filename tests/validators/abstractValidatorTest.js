const expect = require('chai').expect;
const abstractValidator = require('../../app/controllers/validators/abstractValidator')

describe('Abstract', () => {
    it('should be fine when title and details are added', () => {
        const abstract = {
            title: "bla",
            details: "testtest"
        }

        expect(abstractValidator.validateAbstractData(abstract)).to.be.an('array').that.is.empty
    })

    it('should require a title', () => {
        const abstract = {
            details: "testtest"
        }

        const errorArray = abstractValidator.validateAbstractData(abstract)
        expect(errorArray)
            .to.be.an('array')
            .that.has.a.lengthOf(1)
            .that.deep.include({ text: 'Please add a title' })
    })

    it('should require details', () => {
        const abstract = {
            title: "testtest"
        }

        const errorArray = abstractValidator.validateAbstractData(abstract)
        expect(errorArray)
            .to.be.an('array')
            .that.has.a.lengthOf(1)
            .that.deep.include({ text: 'Please add details' })
    })
})
