const note_suttas = require('../src/note_suttas');
const fs = require('fs');

test('output note for SN 12.48 to Notes/Suttas/SN 12.48.md when file does not exist', async () => {
    const options = {
        sutta: 'SN 12.48',
        output_directory: 'Notes/Suttas'
    };
    
    const sutta_contents = fs.readFileSync('test/data/SN 12.48.md', 'utf8');
    const spy = jest.spyOn(fs, 'writeFileSync');
    const succesful = await note_suttas(options);
    expect(spy).toHaveBeenCalledWith('Notes/Suttas/SN 12.48.md', sutta_contents);
    expect(succesful).toBe(1);
});