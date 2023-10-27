# Error Handling

This repo is to compare various error handling patterns in JS and TS.
Each pattern has its own branch.

## Patterns

1. Then-Catch Pattern
2. Try-Catch Pattern
3. Mix'n'Match `.catch` Pattern

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
    showMessage(err) 
 })
console.log(joke)
```
