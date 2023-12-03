const sutta_note_content = require('../src/sutta_note_content');
const fs = require('fs');

test('Return content for SN 12.48 when Notes/Suttas/SN12.48.md does not exist', () => {
    const just_sutta_text = fs.readFileSync('test/data/SN12.48.md', 'utf8');
    const content = sutta_note_content('SN 12.48', 'Notes/Suttas');
    expect(content).toBe(just_sutta_text);
});