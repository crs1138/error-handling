export async function getJoke() {
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {
            'User-Agent': 'crs1138/error-handling',
            // Accept: 'application/json',
        },
    }).catch((err) => {
        console.log('::: getJoke() / fetch :::');
        console.error(err);
        throw new Error('getJoke() failed', { cause: err });
    });
    const joke = await res.json().catch((err) => {
        console.log('::: getJoke() / res.json() :::');
        console.error(err);
        throw new Error('getJoke() failed', { cause: err });
    });
    return joke;
}
