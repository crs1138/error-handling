export async function getJoke() {
    let joke;
    try {
        const res = await fetch('https://icanhazdadjoke.com', {
            headers: {
                'User-Agent': 'crs1138/error-handling',
                // Accept: 'application/json',
            },
        });
        const fetchedJoke = await res.json();
        joke = fetchedJoke;
    } catch (err) {
        console.log('::: getJoke() :::');
        console.error(err);
        throw new Error('getJoke() failed', { cause: err });
    }
    return joke;
}
