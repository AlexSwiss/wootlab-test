const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Products', () => {
    it('should get all products', (done) => {
        chai.request('http://localhost:5000')
        .get('/items')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            done();
        });
    });


});