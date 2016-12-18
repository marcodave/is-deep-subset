var isDeepSubset = require("../main");

describe("is-deep-subset", function () {
    it("should detect subset of strings", function () {
        expect(isDeepSubset("This is a string!", "string")).toBe(true);
        expect(isDeepSubset("This is a string!", "strong")).toBe(false);
    
    });
    
    it("should detect subsequences of arrays", function () {
        expect(isDeepSubset([1,2,3,4], [1,2])).toBe(true);
        expect(isDeepSubset([1,2,3,4], [1,2,3])).toBe(true);
        expect(isDeepSubset([1,2,3,4], [1,2,3,4])).toBe(true);
        expect(isDeepSubset([1,2,3,4], [2,3])).toBe(true);
        expect(isDeepSubset([1,2,3,4], [2,3,4])).toBe(true);
        expect(isDeepSubset([1,2,3,4], [3,4])).toBe(true);
        expect(isDeepSubset([1,2,3,4], [4])).toBe(true);
        
        expect(isDeepSubset([1,2,3,4], [4,3])).toBe(false);
        expect(isDeepSubset([1,2,3,4], [1,4])).toBe(false);
        expect(isDeepSubset([1,2,3,4], [2,4])).toBe(false);
    });
        
    it("should detect subset of root object", function () {
        var superset = {
            "this": "is a object",
            a: "b",
            c: "d"
        };

        expect(isDeepSubset(superset, {})).toBe(true);
        expect(isDeepSubset(superset, {a: "b"})).toBe(true);
        expect(isDeepSubset(superset, {a: "b", c: "d"})).toBe(true);

        expect(isDeepSubset(superset, {c: "a"})).toBe(false);
        expect(isDeepSubset(superset, {"this": "is another subset"})).toBe(false);
    });

    it("should detect a subset of an object inside the root", function () {
        var superset = {
            deep: {
                object: "inside",
                a: 1,
                b: [1, 2, 3]
            },
            another: {
                object: "inside",
                another: "property"
            }
        };

        expect(isDeepSubset(superset, {
            object: "inside"
        })).toBe(true);

        expect(isDeepSubset(superset, {
            a: 1
        })).toBe(true);


        expect(isDeepSubset(superset, {
            another: "property"
        })).toBe(true);


        expect(isDeepSubset(superset, {
            unknown: "property"
        })).toBe(false);

    });

    it("should detect a subset inside arrays", function () {
        var superset = {
            data: [
                {
                    id: 1,
                    name: "John"
                },
                {
                    id: 2,
                    name: "Jane"
                },
                {
                    id: 3,
                    name: "Sarah"
                }
            ]
        };

        expect(isDeepSubset(superset, {
            id: 1,
            name: "John"
        })).toBe(true);

        expect(isDeepSubset(superset, {
            id: 3
        })).toBe(true);

        expect(isDeepSubset(superset, {
            id: 1,
            name: "Sarah"
        })).toBe(false);

        expect(isDeepSubset(superset, "Sarah")).toBe(true);
        expect(isDeepSubset(superset, "Neverland")).toBe(false);

    });
    
    it("should detect arrays in deep subsets", function () {
        var data = {
            data: [
                {
                    a: [1,2,3]
                },
                {
                    b: [2,3,6]
                },
                {
                    c: [1,2,5]
                }
            ]
        };
        
        expect(isDeepSubset(data, [1,2,3])).toBe(true);
        expect(isDeepSubset(data, [2,3])).toBe(true);
        expect(isDeepSubset(data, [1,2,5])).toBe(true);
        
        expect(isDeepSubset(data, [1,2,6])).toBe(false);
        expect(isDeepSubset(data, [1,5])).toBe(false);
    });
    
    it("should detect deep subsets in deep arrays", function () {
        var data = {
            a: [
                {
                    participants: [
                        {
                            name: "Tom",
                            surname: "Hay"
                        },
                        {
                            name: "Jerry",
                            surname: "Stack"
                        }
                    ]
                }
            ]
        };
        
        expect(isDeepSubset(data, {name: "Tom"})).toBe(true);
        expect(isDeepSubset(data, {name: "Jerry"})).toBe(true);
        expect(isDeepSubset(data, {name: "Tom", surname: "Hay"})).toBe(true);
        expect(isDeepSubset(data, [{name: "Jerry", surname: "Stack"}])).toBe(true);
        expect(isDeepSubset(data, "Tom")).toBe(true);
        expect(isDeepSubset(data, "Stack")).toBe(true);
        expect(isDeepSubset(data, "Jer")).toBe(true);
        expect(isDeepSubset(data, "ack")).toBe(true);
        
        expect(isDeepSubset(data, [{name: "Jerry", surname: "Hay"}])).toBe(false);
        expect(isDeepSubset(data, [{surname: "Tom", name: "Hay"}])).toBe(false);
        expect(isDeepSubset(data, "Squeezy")).toBe(false);
    });
});

