function getUrlData(url) {
    const regex = /\/([^/]+)\/(\d+)/;
    const matches = url.match(regex);

    if (matches) {
        const category = matches[1]; // Extracted category
        const id = matches[2];       // Extracted id

        return [category, id]
    } else {
        console.log('URL does not match the expected format.');
    }
}

export default getUrlData;