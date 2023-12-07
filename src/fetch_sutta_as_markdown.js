const { get_sutta_json, get_suttaplex_json } = require('./get_sutta_json');

// fetch sutta using suttacentral get api
async function fetch_sutta_as_markdown(sutta) {
    const sutta_json = await get_sutta_json(sutta);
    const suttaplex_json = await get_suttaplex_json(sutta);
    const title = suttaplex_json.translation.title;
    let output = '';
    output += `#### ${title}\n\n`
    output += translation_body(sutta_json);
    return output;
}

function translation_body(sutta_json) {
    let body = '';
    //TODO: parse keys properly, skip section aann.0.n
    const keys = sutta_json.keys_order.slice(3);
    for (let key of keys) {
        let text = sutta_json.translation_text[key]
        //TODO: handle verses
        if (text) {
            if (sutta_json.html_text[key].startsWith('<p>')) {
                body += '>'
            }
            if (sutta_json.html_text[key].endsWith('</p>')) {
                body += `${text.trim()}\n>\n`;
            } else {
                body += text;
            }
        }
    }
    if (body.endsWith('\n>\n')) {
        body = body.slice(0, -3);
    }
    return body;
}

module.exports = fetch_sutta_as_markdown;