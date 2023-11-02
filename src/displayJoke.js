import { getJoke } from './getJoke.js';

export async function displayJoke() {
    const joke = await getJoke().catch((err) => {
        console.log('::: displayJoke() :::');
        console.error(err);
        throw new Error('displayJoke() failed', { cause: err });
    });
    console.log('================================================');
    console.log({ joke });
    console.log('================================================');
}
