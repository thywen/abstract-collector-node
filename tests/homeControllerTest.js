
var homeController = require('../app/controllers/homeController')

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

describe("Routes", function() {
  describe("GET Users", function() {

      it("should respond", function() {
        var req,res,spy;

        req = res = {};
        spy = res.send = sinon.spy();

        let a = homeController.
        
        //expect(spy.calledOnce).to.equal(true);
      });     

  });
});