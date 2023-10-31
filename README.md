# Error Handling

This repo is to compare various error handling patterns in JS and TS.
Each pattern has its own branch.

## Patterns

1. Then-Catch Pattern
2. Try-Catch Pattern
3. Mix'n'Match `.catch` Pattern
4. Async Wrapping Function - Single Level Pattern
5. Non-Async Wrapping Function - Single Level Pattern
6. Third Party Libraries

### Then-Catch Pattern

```javascript
getJoke()
    .then(joke  => console.log(joke))
    .catch(err => console.error(err))

```

### Try-Catch Pattern

```javascript
try {
    const joke = await getJoke()
    console.log(joke)
} catch (err) {
    console.error(err)
}

```

### Mix'n'Match `.catch` Pattern

```javascript
const joke = await getJoke().catch(err => { 
    console.error(err)
 })
console.log(joke)
```

### Async Wrapping Function - Single Level Pattern

```javascript
async function asyncWrap(promise) {
    try {
        const data = await promise
        return [data, undefined]
    } catch (err) {
        return [undefined, err]
}

(async () => {
    const [joke, err] = await asyncWrap(getJoke())
    if ( joke ) { console.log(joke) }
    if (err) { console.error(err) }
})()
```

### Non-Async Wrapping Function - Single Level Pattern

```javascript
function wrapIt(promise) {
    return Promise.allSettled([promise]).then(([{value, reason}]) => { 
        return [value, reason]
     })
}

const [joke, err] = wrapIt(getJoke())
 if ( joke ) { console.log(joke) }
 if (err) { console.error(err) }
```

### Third Party Libraries

- [mats852/doublet](https://github.com/mats852/doublet)
- [scopsy/await-to-js](https://github.com/scopsy/await-to-js)
- [thelinuxlich/go-go-try](https://github.com/thelinuxlich/go-go-try)
