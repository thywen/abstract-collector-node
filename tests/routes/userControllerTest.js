const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
var server
var request

chai.use(chaiHttp);

beforeEach(() => {
    server = require('../../app')
    request = chai.request(server);
})


describe('User Controller', () => {
    it("open the login", function (done) {
        request.get('/users/login').then((res) => {
            expect(res.text).to.have.string('login')
            expect(res).to.have.status(200)
            done();
        })
    })

    it("open the registration", function (done) {
        request.get('/users/registration').then((res) => {
            expect(res.text).to.have.string('registration')
            expect(res).to.have.status(200)
            done();
        })
    })
})