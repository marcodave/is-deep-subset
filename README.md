# is-deep-subset
Javascript library to check if an object is deeply contained into another

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
and also objects inside objects!
```javascript
isDeepSubset({ some: "deep object", you: { have: "here!" } }, { have: "here!" }) === true
isDeepSubset({ some: "deep object", you: { have: "here!" } }, "here!") === true
isDeepSubset({ some: "deep object", you: { have: "here!" } }, "!") === true
```

and also checking deeply inside nested arrays
```javascript
isDeepSubset({ some: ["deep", "object", { you: { have: "here!" } } ] }, ["deep", "object"]) === true
isDeepSubset({ some: ["deep", "object", { you: { have: "here!" } } ] }, [{ you: {} }]) === true
```
