const should = require("should");
const request = require('superagent');
const chai = require("chai");
const expect = chai.expect;
const urlBase = "http://localhost:8090/goodsRecipt";

describe("Goods Recipt Route Test",function(){
    this.timeout(10000);

    it('Get the Goods recipts issuied by a given supplier by providing supplier Id', function(done) {
        request.get(urlBase+'/getGoodReciptsBySupplierId/6')
            .set('Content-Type', "application/json")
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body.status).to.equal(200);
                done();

            });
    });

});