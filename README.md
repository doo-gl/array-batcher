# Array Batcher
A method for batching items in an array, returning a new Array containing smaller Arrays of batched items.

Items are batched in order, with the first batch containing the first items in the original Array.

A `batchSize` parameter needs to be provided to specify the max size of the batches to be created.
Batches will be created to this max size, up until the final batch which will be filled partially if there are not enough items to fill it.

The `batch()` method can be added as an extension of the native JS `Array` interface. 

```js
const result1 = batch(
  [1,2,3,4,5,6,7,8,9],
  2
)
// returns [
//  [1,2],
//  [3,4],
//  [5,6],
//  [7,8],
//  [9]
// ]

const result2 = [1,2,3,4,5,6,7,8,9].dedupe(2)
// returns [
//  [1,2],
//  [3,4],
//  [5,6],
//  [7,8],
//  [9]
// ]
```

## Installation

```shell
npm install --save array-batcher
```


## Documentation

### Extending `Array` with `batch()`

To add the `batch()` method to JS's base `Array` interface, you can import the extension by including:

```js
import "array-batcher/extend-array-with-batch"
```

into your codebase at some point before attempting to call `[].batch()`

```javascript
// somewhere in your initialization logic
import "array-batcher/extend-array-with-batch"

// ...

// Array now has a batch() method
const result = [1,2,3].batch(2) // returns [[1,2], [3]]
```

