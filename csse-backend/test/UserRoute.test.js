const should = require("should");
const chai = require("chai");
const expect = chai.expect;
const urlBase = "http://localhost:8090/user";
const request = require('superagent');


describe("User route test",function(){
    this.timeout(10000);
    it('User logged in successfully', function(done) {
        request.post(urlBase+'/login')
            .set('Content-Type', "application/json")
            .send({email: "jenny@yopmail.com", password: "mahen"})
            .end(function(err, res) {
                if (err) done(err);
                res.body.user.should.have.property('User_ID');

            });
        done();
    });

    it('User Type is correct', function(done) {
        request.post(urlBase+'/login')
            .set('Content-Type', "application/json")
            .send({email: "jenny@yopmail.com", password: "mahen"})
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body.user.Type).to.equal("Delivery Manager")

            });
        done();
    });

});