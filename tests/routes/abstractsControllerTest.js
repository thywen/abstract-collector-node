const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
var server;
var request;

chai.use(chaiHttp);

beforeEach(() => {
    server = require('../../app');
    request = chai.request(server);
})

afterEach(() => {
    server.close();
  })

describe('AbstractController', () => {
    it("should inform that details are missing", (done) => {
        request.post('/abstracts')
            .send({ title: 'bla' })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.match(/Please add details/);
                if (err) return done(err);
                done();
            });
    });

    it("should inform that the title are missing", (done) => {
        request.post('/abstracts')
            .send({ details: 'bla' })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.match(/Please add a title/);
                if (err) return done(err);
                done();
            });
    })

    it("should inform that everything is missing", (done) => {
        request.post('/abstracts')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.match(/Please add details/);
                expect(res.text).to.match(/Please add a title/);
                if (err) return done(err);
                done();
            });
    });
})
