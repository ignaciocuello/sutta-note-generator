const get_sutta_json = require('../src/get_sutta_json')
const fs = require('fs')

test('Return json for SN 12.48', () => {
    const mock_json = fs.readFileSync('test/data/SN12.48.json', 'utf8');
    //TODO mock get request to return above json file
    const sutta_json = get_sutta_json('SN 12.48');
    expect(sutta_json.root_text.title).toBe('Lokāyatikasutta');
    expect(sutta_json.translation.title).toBe('A Cosmologist');
    expect(content).toBe(formatted_sutta_text);
});