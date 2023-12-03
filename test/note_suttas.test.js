const note_suttas = require('../src/note_suttas');
const fs = require('fs');

test('output note for SN 12.48 to Notes/Suttas/SN12.48.md when file does not exist', () => {
    const options = {
        sutta: 'SN 12.48',
        output_directory: 'Notes/Suttas'
    };
    const sutta_contents = fs.readFileSync('test/data/SN12.48.md', 'utf8');

    jest.mock('fs');
    
    fs.writeFileSync.mockReturnValueOnce();
    const succesful = note_suttas(options);
    expect(fs.writeFileSync).toHaveBeenCalledWith('Notes/Suttas/SN 12.48.md', sutta_contents);
    expect(succesful).toBe(1);
});