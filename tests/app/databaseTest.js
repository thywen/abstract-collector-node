const mongoose = require('mongoose');
var connection, server;
const expect = require('chai').expect;

describe('Database Connection', () => {

    describe('Connected', () => {
        beforeEach(() => {
            process.env.PROD = true;
            connection = mongoose.connection;
            connection.host = null;
            server = require('../../app');
        });

        it('connects to the test database', (done) => {
            expect(connection.host).to.not.be.null;
            done()
        });

        afterEach((done) => {
            server.close();
            connection.close()
            done();
        });
    });

    describe('Not Connected', () => {

        beforeEach(() => {
            process.env.PROD = false;
            mongoose.connection.host = null;
            server = require('../../app');
        });


        it('does not connect to the test database', (done) => {
            expect(connection.host).to.be.null;
            done();
        });

        afterEach(() => {
            server.close();
        });
    });
});