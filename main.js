'use strict';
var util = require("util");
var isSubset = require('is-subset');

module.exports = isDeepSubset;

function isDeepSubset(superset, subset) {
    if (isDeepSubset.__debug) {
        console.log("checking", JSON.stringify(superset));
    }
    if (util.isString(superset)) {
        return superset.indexOf(subset) >= 0;
    }
    if (util.isArray(superset) && util.isArray(subset)) {
        var res = isArraySubsequence(superset, subset);
        if (isDeepSubset.__debug) {
            console.log("found array subset:", res);
        }
        return res;
    }
    return isDeepSubsetReal(superset, subset);
}

function isArraySubsequence(sequence, sub) {
    return isDeepSubsetReal(sequence, sub) || (sequence.length > 0 && isArraySubsequence(sequence.slice(1), sub));
}

function isDeepSubsetReal(superset, subset) {
    return isSubset(superset, subset) || Object.keys(superset).some(function (key) {
        if (isDeepSubset.__debug) {
            console.log("checking key", key, "of", JSON.stringify(superset));
        }
        return isDeepSubset(superset[key], subset);
    });
}




