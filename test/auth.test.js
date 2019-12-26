const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('user authentication', () => {
    
    it('should authenticate user', (done) => {
        chai.request('http://localhost:5000')
        .get('/auth/login')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

});  