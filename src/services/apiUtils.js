export const fetchApiCall = async (url, method, text) => {
    if (method === 'GET') {
        const res = await fetch(url);
        const json = await res.json();

        return json;
    } else {
        const res = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: text
        });

        const json = await res.json();

        return json;
    }
}
