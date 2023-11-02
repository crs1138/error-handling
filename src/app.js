import { displayJoke } from './displayJoke.js';

(async function app() {
    await displayJoke().catch((err) => {
        console.log('::: app() :::');
        console.error(err);
        throw new Error('app() failed', { cause: err });
    });
})();
