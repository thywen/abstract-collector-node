const mongoose = require('mongoose')
var connection;

const expect = require('chai').expect;

describe('Database Connection', () => {

    beforeEach(() => {
        process.env.PROD = false;
        connection = mongoose.connection;
        server = require('../../app');
    });
    
    afterEach(() => {
        server.close();
        connection.close();
    });
    
    it('connects to the test database', (done) => {
        expect(connection.host).to.not.be.null;
        done();
    })
})