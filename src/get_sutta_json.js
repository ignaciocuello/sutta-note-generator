async function get_sutta_json(sutta) {
    const suttaplex_json = await get_suttaplex_json(sutta);

    const uid = suttaplex_json.suttaplex.uid
    const url = `https://suttacentral.net/api/bilarasuttas/${uid}/sujato?lang=en`; 

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const sutta_json = await response.json();
    return sutta_json;
}

async function get_suttaplex_json(sutta) {
    const sutta_id = get_sutta_id(sutta);
    const url = `https://suttacentral.net/api/suttas/${sutta_id}/sujato?lang=en&siteLanguage=en`; 
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const suttaplex_json = await response.json();
    return suttaplex_json;
}

function get_sutta_id(sutta) {
    const sutta_id = sutta.replace(/\s+/g, '').toLowerCase();
    return sutta_id;
}

module.exports = { get_sutta_json, get_suttaplex_json };