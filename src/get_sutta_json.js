async function get_sutta_json(sutta) {
    const sutta_id = sutta.replace(/\s+/g, '').toLowerCase();
    const url = `https://suttacentral.net/api/bilarasuttas/${sutta_id}/sujato?lang=en`; // Replace with your API endpoint

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const sutta_json = await response.json();
    return sutta_json;
}

module.exports = get_sutta_json;