const { get_sutta_json, get_suttaplex_json } = require('./get_sutta_json');
const parse_sutta_key = require('./parse_sutta_key');

async function fetch_sutta_as_markdown(sutta) {
    const sutta_json = await get_sutta_json(sutta);
    const suttaplex_json = await get_suttaplex_json(sutta);
    const title = suttaplex_json.translation.title;
    let output = '';
    output += `#### ${title}\n\n`
    output += translation_body(sutta, sutta_json);
    return output;
}

//TODO: test MN133
function translation_body(sutta, sutta_json) {
    let body = '';
    const keys = sutta_json.keys_order;
    const sutta_id = get_sutta_id(sutta);

    for (let key of keys) {
        const parsedKey = parse_sutta_key(key);
        if (parsedKey.sutta == sutta_id && 
            parsedKey.segment != '0' && 
            parsedKey.sub_segment != '0') {
            let text = sutta_json.translation_text[key] 
            if (text) {
                const html = sutta_json.html_text[key];
                if (html.includes('verse-line')) {
                    body += `>    >${text}\n`
                    if (html.includes('</p>')) {
                        body += '>\n';
                    }
                } else {
                    //The or is to account for empty segments that contain an opening <p
                    //bit hacky, so fix later
                    if (html.includes('<p>') || body.endsWith('\n')) {
                        body += '>'
                    }
                    if (html.includes('</p>')) {
                        body += `${text.trim()}\n>\n`;
                    } else {
                        body += text;
                    }
                } 
            }
        }
    }
    if (body.endsWith('\n>\n')) {
        body = body.slice(0, -3);
    }
    return body;
}

//TODO: deduplicate
function get_sutta_id(sutta) {
    const sutta_id = sutta.replace(/\s+/g, '').toLowerCase();
    return sutta_id;
}

module.exports = fetch_sutta_as_markdown;