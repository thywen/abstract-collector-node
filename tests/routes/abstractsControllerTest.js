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


describe('AbstractController', () => {
    it("should inform that details are missing", function (done) {
        request.post('/abstracts')
            .send({ title: 'bla' })
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.text).to.match(/Please add details/)
                if (err) return done(err);
                done();
            });
    })

    it("should open the main page", function (done) {
        request.post('/abstracts')
            .send({ details: 'bla' })
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.text).to.match(/Please add a title/)
                if (err) return done(err);
                done();
            });
    })

    it("should inform that everything is missing", function (done) {
        request.post('/abstracts')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.text).to.match(/Please add details/)
                expect(res.text).to.match(/Please add a title/)
                if (err) return done(err);
                done();
            });
    })
})
