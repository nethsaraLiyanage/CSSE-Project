const should = require("should");
const request = require('superagent');
const chai = require("chai");
const expect = chai.expect;
const urlBase = "http://localhost:8090/site";

describe("Site route Test",function(){
    this.timeout(10000);

    it('Get all sitef for a perticulat site manager ', function(done) {
        request.get(urlBase+'/getSiteByManagerId/1')
            .set('Content-Type', "application/json")
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body.status).to.equal(200);
                done();

            });
    });

});