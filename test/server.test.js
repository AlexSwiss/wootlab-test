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
            done();
        });
    });

    it("it should add a single product on items/additem", (done) => {
        chai.request('http://localhost:5000')
        .post('/item/additem')
        .send({
            "title": "jean", 
            "body": "a blue denim jean", 
            "price": "N2000",
            "quantity": "5"
        })
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            done();

        });
    });
    it("it should get update a single product ");
    it("it should delete a single product");
});