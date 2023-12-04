require('jest-fetch-mock').enableMocks()
const { get_sutta_json, get_suttaplex_json } = require('../src/get_sutta_json')
const fs = require('fs')

beforeEach(() => {
    fetch.resetMocks();
})

test('Return json for SN 12.48', async () => {
    const mock_json = fs.readFileSync('test/data/SN 12.48.json', 'utf8');
    fetchMock.mockResponseOnce(mock_json);
    const sutta_json = await get_sutta_json('SN 12.48');
    expect(sutta_json.root_text['sn12.48:0.3']).toBe('Lokāyatikasutta ');
    expect(sutta_json.translation_text['sn12.48:0.3']).toBe('A Cosmologist ');
});

test('Return json for suttaplex SN 12.48', async () => {
    const mock_json = fs.readFileSync('test/data/SN 12.48.suttaplex.json', 'utf8');
    fetchMock.mockResponseOnce(mock_json);
    const suttaplex_json = await get_suttaplex_json('SN 12.48');
    expect(suttaplex_json.root_text.title).toBe('Lokāyatikasutta');
    expect(suttaplex_json.translation.title).toBe('A Cosmologist ');
});

//TODO: test for range of suttas e.g. AN /dhp