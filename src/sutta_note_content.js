const fs = require('fs');
const path = require('path');
// If the output file is empty then just return the sutta text, otherwise return 
// the updated sutta text in the existing file, but keep everything else intact.
function sutta_note_content(sutta, output_directory) {
    const sutta_file = path.join(output_directory, `${sutta}.md`);
    const existing_content = fs.existsSync(sutta_file) ? fs.readFileSync(sutta_file, 'utf8') : '';
    // TODO: write fetch_sutta_as_markdown
    const sutta_text = fetch_sutta_as_markdown(sutta)
    if (existing_content) {
        // TODO: merge
    }
    return sutta_text;
}

module.exports = sutta_note_content;

