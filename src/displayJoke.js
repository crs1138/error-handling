import { getJoke } from './getJoke.js';
import { asyncWrap } from './asyncWrap.js';

export async function displayJoke() {
    const [joke, err] = await asyncWrap(getJoke());
    if (err) {
        throw new Error('displayJoke() > getJoke() failed', { cause: err });
    }

    console.log('================================================');
    console.log({ joke });
    console.log('================================================');
}
