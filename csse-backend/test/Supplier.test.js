const should = require("should");
const chai = require("chai");
const expect = chai.expect;
const urlBase = "http://localhost:8090/supplier";
const request = require('superagent');


describe("Supplier route test",function(){
    this.timeout(10000);
    it('Supplier apply for a requisition', function(done) {
        request.post(urlBase+'/supplierApply')
            .set('Content-Type', "application/json")
            .send({
                No_Of_Deliveries: 3,
                Additional_Description: "test",
                quantity: 1,
                request_price: 3000,
                Supplier_ID: 5,
                Request_Id: 1,
                status: "pending"
            })
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body.state).to.equal(201)

            });
        done();
    });


});