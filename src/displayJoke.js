import { getJoke } from './getJoke.js';

export async function displayJoke() {
    // try {
    const joke = await getJoke();
    console.log('================================================');
    console.log({ joke });
    console.log('================================================');
    // } catch (err) {
    //     console.log('::: displayJoke() :::');
    //     console.error(err);
    //     throw new Error('displayJoke() failed', { cause: err });
    // }
}
