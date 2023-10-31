export function getJoke() {
    return fetch('https://icanhazdadjoke.com', {
        headers: {
            'User-Agent': 'crs1138/error-handling',
            // Accept: 'application/json',
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((fetchedJoke) => {
            return fetchedJoke;
        })
        .catch((err) => {
            console.log('::: getJoke() :::');
            console.error(err);
            throw new Error('getJoke() failed', { cause: err });
        });
}
