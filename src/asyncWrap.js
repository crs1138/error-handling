export async function asyncWrap(promise) {
    try {
        const data = await promise;
        return [data, undefined];
    } catch (err) {
        console.error('::: asyncWrap() :::');
        return [undefined, err];
    }
}
