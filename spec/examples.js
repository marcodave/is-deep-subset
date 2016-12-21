
describe("is-deep-subset library", function () {
    it("should be able to be required", function () {
        var isDeepSubset = require("../main");
        expect(isDeepSubset).toBeDefined();
    });

    it("should compile examples from the README.md", function () {
        var isDeepSubset = require("../main");

        expect(isDeepSubset("Some string", "string") === true).toBe(true);
        expect(isDeepSubset("Some string", "another string") === false).toBe(true);
        expect(isDeepSubset([1, 2, "hello"], [1]) === true).toBe(true);
        expect(isDeepSubset([1, 2, "hello"], [2, "hello"]) === true).toBe(true);
        
        expect(isDeepSubset([1, 2, "hello"], [3, "hello"]) === false).toBe(true);

        expect(isDeepSubset({some: "deep object", you: {have: "here!"}}, {some: "deep object"}) === true).toBe(true);
        expect(isDeepSubset({some: "deep object", you: {have: "here!"}}, {you: {have: "here!"}}) === true).toBe(true);

        expect(isDeepSubset({some: "deep object", you: {have: "here!"}}, {have: "here!"}) === true).toBe(true);
        expect(isDeepSubset({some: "deep object", you: {have: "here!"}}, "here!") === true).toBe(true);
        expect(isDeepSubset({ some: "deep object", you: { have: "here!", its: 3 } }, 3) === true).toBe(true);
        expect(isDeepSubset({ some: "deep object", you: { have: "here!", its: true } }, true) === true).toBe(true);

        expect(isDeepSubset({some: ["deep", "object", {you: {have: "here!"}}]}, ["deep", "object"]) === true).toBe(true);
        expect(isDeepSubset({some: ["deep", "object", {you: {have: "here!"}}]}, [{you: {}}]) === true).toBe(true);
    });

})



