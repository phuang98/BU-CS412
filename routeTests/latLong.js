const app = require('../app.js');
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('WX API', () => {
    it('should return a 200 success code', function (done){
        chai.request(app)
            .get('/current')
            .end((er, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });
    it('should have text in the HTML file', function (done){
        chai.request(app)
            .get('/current')
            .end((er, response) => {
                expect(response.text).to.not.be.empty;
                done();
            })
    });
    it('test route should be on /current', function (done){
        chai.request(app)
            .get('/current')
            .end((er, response) => {
                expect(response.request.url.split('/').pop()).to.equal('current');
                done();
            })
    });
})