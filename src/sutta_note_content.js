const fs = require('fs');
const path = require('path');
const { get_suttaplex_json } = require('./get_sutta_json');
const fetch_sutta_as_markdown = require('./fetch_sutta_as_markdown');

// If the output file is empty then just return the sutta text, otherwise return 
// the updated sutta text in the existing file, but keep everything else intact.
async function sutta_note_content(sutta, output_directory) {
    const sutta_file = path.join(output_directory, `${sutta}.md`);
    const existing_content = fs.existsSync(sutta_file) ? fs.readFileSync(sutta_file, 'utf8') : '';
    // TODO: write fetch_sutta_as_markdown
    const sutta_text = await fetch_sutta_as_markdown(sutta)
    if (existing_content) {
        // TODO: merge
    } else {
        // TODO: add sutta summary if available
        const properties = await note_properties(sutta);
        return `${properties}\n### Sutta\n\n${sutta_text}`
    }
    return sutta_text;
}

//TODO: change functions to lowerCamelCase
async function note_properties(sutta) {
    const suttaplex_json = await get_suttaplex_json(sutta);
    const title = suttaplex_json.translation.title.trim();
    const root_title = suttaplex_json.root_text.title.trim();
    return `---
aliases:
  - ${ '"' + sutta + ": " + root_title + '"'}
  - ${ root_title }
  - ${ '"' + sutta + ": " + title + '"'}
tags:
  - "#sutta"
---`;
}

module.exports = sutta_note_content;

