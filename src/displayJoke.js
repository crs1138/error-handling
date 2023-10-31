import { getJoke } from './getJoke.js';

export function displayJoke() {
    getJoke()
        .then((joke) => {
            console.log('================================================');
            console.log({ joke });
            console.log('================================================');
        })
        .catch((err) => {
            console.log('::: displayJoke() :::');
            console.error(err);
            throw new Error('displayJoke() failed', { cause: err });
        });
}
