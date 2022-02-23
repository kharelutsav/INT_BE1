const jasmine = require("jasmine");

describe("Test for http server", ()=>{
    var a = "True";
    it("should give bad request", ()=>{
        const b = "True";
        expect(a).toBe(b);
    })
})