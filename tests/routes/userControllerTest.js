const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
var server;
var request;

chai.use(chaiHttp);

describe('User Controller', () => {

    beforeEach(() => {
        server = require('../../app');
        request = chai.request(server);
    });

    afterEach(() => {
        server.close();
    });

    it('open the login', (done) => {
        request.get('/users/login').then((res) => {
            expect(res.text).to.have.string('login');
            expect(res).to.have.status(200);
            done();
        })
    })

    it('open the registration', (done) => {
        request.get('/users/registration').then((res) => {
            expect(res.text).to.have.string('registration');
            expect(res).to.have.status(200);
            done();
        })
    })
})