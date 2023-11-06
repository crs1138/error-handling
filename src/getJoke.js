import { asyncWrap } from './asyncWrap.js';
export async function getJoke() {
    const [res, err] = await asyncWrap(
        fetch('https://icanhazdadjoke.com', {
            headers: {
                'User-Agent': 'crs1138/error-handling',
                // Accept: 'application/json',
            },
        })
    );
    if (err) {
        throw new Error('getJoke() > fetch() failed', { cause: err });
    }

    const [joke, err2] = await asyncWrap(res.json());
    if (err2) {
        throw new Error('getJoke() > res.json() failed', { cause: err2 });
    }

    return joke;
}
