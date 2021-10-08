const should = require("should");
const request = require('superagent');
const chai = require("chai");
const expect = chai.expect;
const urlBase = "http://localhost:8090/lineManager";

describe("Line manager Actions",function(){
    this.timeout(10000);

    it(' Approve requisitions ', function(done) {
        request.put(urlBase+'/request/accept/1')
            .set('Content-Type', "application/json")
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body.message).to.equal("Requisition Approved");

            });
        done();
    });

    it(' Approve requisitions ', function(done) {
        request.put(urlBase+'/request/reject/2')
            .set('Content-Type', "application/json")
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body.message).to.equal("Requisition Rejeted");

            });
        done();
    });

});