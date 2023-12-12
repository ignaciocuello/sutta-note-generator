const note_suttas = require('../src/note_suttas');
const fs = require('fs');
//jest.mock('fs');

test('output note for SN 12.48 to Notes/Suttas/SN 12.48.md when file does not exist', async () => {
    const options = {
        sutta: 'SN 12.48',
        output_directory: '/home/ignacio/Obsidian/Vaults/Ignacio/Ignacio/Suttas/'
    };

    const sutta_contents = jest.requireActual('fs').readFileSync('test/data/SN 12.48.md', 'utf8');
    const succesful = await note_suttas(options);
    expect(fs.writeFileSync).toHaveBeenCalledWith('/home/ignacio/Obsidian/Vaults/Ignacio/Ignacio/Suttas/SN 12.48.md', sutta_contents);
    expect(succesful).toBe(1);
});