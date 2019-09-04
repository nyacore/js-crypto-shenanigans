/**
 * 
 * @param {String} url Url to fetch JSON from
 */
export async function loadJSON(url) {
    const response = await fetch(url, {
        type: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });
    return response.json();
}
