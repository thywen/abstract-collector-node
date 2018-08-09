const chai = require('chai');
const expect = chai.expect;
const passwordHasher = require('../../app/security/passwordHasher');

describe('password', () => {
    it('should hash the password', async () => {
        let password = "supertestpassword";
        let hashedPassword = await passwordHasher.hashPassword(password);
        expect(hashedPassword).to.not.equal(password)
        expect(hashedPassword).to.not.equal(undefined)
    });

    it('should hash the passwords similar', async () => {
        let password = "superduperPassword";
        let hashedPassword1 = await passwordHasher.hashPassword(password);
        let hashedPassword2 = await passwordHasher.hashPassword(password);
        expect(hashedPassword1).to.equal(hashedPassword2)
    })
});