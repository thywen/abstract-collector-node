const expect = require('chai').expect;
const userValidator = require('../../app/validators/userValidator')


describe('User', () => {
    describe('Password', () => {
        it('should inform that the passwords are not matching', () => {
            const user = {
                password: "asdfasdfasdfqq",
                passwordConfirmation: "asdfasdfsadfasfasf"
            }
            const errorArray = userValidator.validateUserData(user)
            expect(errorArray)
                .to.be.an('array')
                .that.has.a.lengthOf(1)
                .that.deep.include({ text: 'The passwords don\'t match' })
        })

        it('should inform that the password is too short', () => {
            const user = {
                password: "asdf",
                passwordConfirmation: "asdf"
            }
            const errorArray = userValidator.validateUserData(user)
            expect(errorArray)
                .to.be.an('array')
                .that.has.a.lengthOf(1)
                .that.deep.include({ text: 'The passwords needs at least 8 characters' })
        })
    })
})