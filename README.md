# is-deep-subset
Javascript library to check if an object is deeply contained into another

[![Build Status](https://travis-ci.org/marcodave/is-deep-subset.svg?branch=master)](https://travis-ci.org/marcodave/is-deep-subset)

# Usage

## require it...
```javascript
var isDeepSubset = require("is-deep-subset")
```

## and then use it...

### with strings
```javascript
isDeepSubset("Some string", "string") === true

isDeepSubset("Some string", "another string") === false
```

### with arrays
```javascript
isDeepSubset([1, 2, "hello"], [1]) === true

isDeepSubset([1, 2, "hello"], [3, "hello"]) === false
```

### with objects 
```javascript
isDeepSubset({ some: "deep object", you: { have: "here!" } }, { some: "deep object" }) === true
isDeepSubset({ some: "deep object", you: { have: "here!" } }, { you: { have: "here!" } }) === true
```

### checks objects inside objects
```javascript
isDeepSubset({ some: "deep object", you: { have: "here!" } }, { have: "here!" }) === true
isDeepSubset({ some: "deep object", you: { have: "here!" } }, "here!") === true
isDeepSubset({ some: "deep object", you: { have: "here!", its: 3 } }, 3) === true
isDeepSubset({ some: "deep object", you: { have: "here!", its: true } }, true) === true
```

### and also checks deeply inside nested arrays
```javascript
isDeepSubset({ some: ["deep", "object", { you: { have: "here!" } } ] }, ["deep", "object"]) === true
isDeepSubset({ some: ["deep", "object", { you: { have: "here!" } } ] }, [{ you: {} }]) === true
```

### and also substrings inside deep object structure
```javascript
isDeepSubset({ some: ["deep", "object", { you: { have: "here!" } } ] }, "deep") === true
isDeepSubset({ some: ["deep", "object", { you: { have: "here!" } } ] }, "here") === true
isDeepSubset({ some: ["deep", "object", { you: { have: "here!" } } ] }, "!") === true
```
