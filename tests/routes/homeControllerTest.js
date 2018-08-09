const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
var server, request;

chai.use(chaiHttp);

describe('Static Routes', () => {

    beforeEach(() => {
        server = require('../../app');
        request = chai.request(server);
    });

    afterEach(() => {
        server.close();
    });

    it('should open the main page', (done) => {
        request.get('/').then((res) => {
            expect(res.text).to.have.string('Jot down ideas for your next abstracts');
            expect(res).to.have.status(200);
            done();
        })
            .catch(function (err) {
                throw err;
            });
    });

    it('should open the about page', (done) => {
        request.get('/about').then((res) => {
            expect(res.text).to.have.string('This is a Node/Express app for jotting down abstracts');
            expect(res).to.have.status(200);
            done();
        })
            .catch(function (err) {
                throw err;
            });
    });

    it('should render a 404 page when an unknown page is opened', (done) => {
        request.get('/blablabla').then((res) => {
            expect(res).to.have.status(404);
            done();
        })
    })
});
