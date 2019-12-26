const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('payment', () => {
    
    it('should create payment', (done) => {
        chai.request('http://localhost:5000')
        .get('/api/payment/create')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

});  