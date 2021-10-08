const should = require("should");
const request = require('superagent');
const chai = require("chai");
const expect = chai.expect;
const urlBase = "http://localhost:8090/requisition";

describe("Requisition route Test",function(){
    this.timeout(10000);

    it('Get all approved requisitions ', function(done) {
        request.get(urlBase+'/approved')
            .set('Content-Type', "application/json")
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body.status).to.equal(200);
                done();

            });
    });

});