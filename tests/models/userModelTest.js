const expect = require('chai').expect;
const mongoose = require('mongoose');
require('../../app/models/User');
const User = mongoose.model('user');

describe('User', () => {
    const name = 'test';
    const email = 'email@mail.com';
    const password = 'asdfasdf';
    it('should create a valid user', () => {
        const user = new User({
            name,
            email,
            password
        });
        expect(user.name).to.be.a.string(name);
        expect(user.email).to.be.a.string(email);
        expect(user.password).to.be.a.string(password);
    });

    it('should require a name', () => {
        const abstract = new User();

        abstract.validate((err) => {
            expect(err.errors.name).to.exist;
        });
    });

    it('should require an email', () => {
        const abstract = new User();

        abstract.validate((err) => {
            expect(err.errors.email).to.exist;
        });
    });

    it('should require a password', () => {
        const abstract = new User();

        abstract.validate((err) => {
            expect(err.errors.password).to.exist;
        });
    });
});