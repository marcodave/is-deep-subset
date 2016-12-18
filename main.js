var util = require("util");
var isSubset = require("is-subset");

module.exports = isDeepSubset;

function isDeepSubset(superset, subset) {
    if (util.isString(superset)) {
        return superset.indexOf(subset) >= 0;
    }
    if (util.isArray(superset) && util.isArray(subset)) {
        var res = isArraySubsequence(superset, subset);
        return res;
    }
    return isDeepSubsetReal(superset, subset);
}

function isArraySubsequence(sequence, sub) {
    return isDeepSubsetReal(sequence, sub) || (sequence.length > 0 && isArraySubsequence(sequence.slice(1), sub));
}

function isDeepSubsetReal(superset, subset) {
    return isSubset(superset, subset) || Object.keys(superset).some(function (key) {
        return isDeepSubset(superset[key], subset);
    });
}




