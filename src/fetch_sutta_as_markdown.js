const { get_sutta_json } = require('./get_sutta_json');

// fetch sutta using suttacentral get api
async function fetch_sutta_as_markdown(sutta) {
    let sutta_json = await get_sutta_json(sutta);
    //TODO: get title from suttaplex card
    const title = sutta_json.translation_text[sutta_json.keys_order[2]];
    let output = '';
    output += `#### ${title}\n\n`
    output += translation_body(sutta_json);
    return output;
}

function translation_body(sutta_json) {
    let body = '';
    const keys = sutta_json.keys_order.slice(3);
    for (let key of keys) {
        let text = sutta_json.translation_text[key]
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