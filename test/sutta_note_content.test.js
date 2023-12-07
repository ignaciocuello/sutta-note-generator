const sutta_note_content = require('../src/sutta_note_content');
const fs = require('fs');

test('Return content for SN 12.48 when Notes/Suttas/SN 12.48.md does not exist', async () => {
    const just_sutta_text = fs.readFileSync('test/data/SN 12.48.md', 'utf8');
    const content = await sutta_note_content('SN 12.48', 'Notes/Suttas');
    expect(content).toBe(just_sutta_text);
});

test('Return content for AN 1.1 when Notes/Suttas/AN 1.1.md does not exist', async () => {
    const just_sutta_text = fs.readFileSync('test/data/AN 1.1.md', 'utf8');
    const content = await sutta_note_content('AN 1.1', 'Notes/Suttas');
    expect(content).toBe(just_sutta_text);
});