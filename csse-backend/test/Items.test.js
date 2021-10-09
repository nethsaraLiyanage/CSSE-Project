const should = require("should");
const request = require('superagent');
const chai = require("chai");
const expect = chai.expect;
const urlBase = "http://localhost:8090/item";

describe("Items Route Test",function(){
    this.timeout(10000);

    it('Get all Items belonging to a given site', function(done) {
        request.get(urlBase+'/ItemsBySite/1')
            .set('Content-Type', "application/json")
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body.status).to.equal(200);
                done();

            });
    });

});