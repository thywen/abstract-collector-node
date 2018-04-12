
var homeController = require('../../app/controllers/homeController')

const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
var server
var request

chai.use(chaiHttp);


beforeEach( () => {
  server = require('../../app')
  request = chai.request(server);
})



describe("Routes", function () {
  describe("GET Users", function () {

    it("should open the main page", function (done) {
      request.get('/').then((res) => {
        expect(res.text).to.have.string('Jot down ideas for your next abstracts')
        expect(res).to.have.status(200)
        done();
      })
      .catch(function (err) {
        throw err;
        done();
      });
    })

    it("should open the about page", function (done) {
      request.get('/about').then((res) => {
        expect(res.text).to.have.string('This is a Node/Express app for jotting down abstracts')
        expect(res).to.have.status(200)
        done();
      })
      .catch(function (err) {
        throw err;
        done();
      });
    })

    it('should render a 404 page when an unknown page is opened', (done) => {
      request.get('/blablabla').then((res) => {
        expect(res).to.have.status(404)
        done();
      })
    })
  })
})