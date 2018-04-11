
var homeController = require('../app/controllers/homeController')

const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../app')

chai.use(chaiHttp);

const agent = chai.request.agent(server);
const request = chai.request(server);

describe("Routes", function () {
  describe("GET Users", function () {

    it("should respond", function (done) {
      request.get('/').then((res) => {
        expect(res.text).to.have.string('Jot down ideas for your next abstracts')
        done();
      })
      .catch(function (err) {
        throw err;
        done();
      });
    })
  })
})