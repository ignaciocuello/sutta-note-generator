require('jest-fetch-mock').enableMocks()
const get_sutta_json = require('../src/get_sutta_json')
const fs = require('fs')

beforeEach(() => {
    fetch.resetMocks();
})

test('Return json for SN 12.48', async () => {
    const mock_json = fs.readFileSync('test/data/SN12.48.json', 'utf8');
    fetchMock.mockResponseOnce(mock_json);
    const sutta_json = await get_sutta_json('SN 12.48');
    expect(sutta_json.root_text['sn12.48:0.3']).toBe('Lokāyatikasutta ');
    expect(sutta_json.translation_text['sn12.48:0.3']).toBe('A Cosmologist ');
});

//TODO: test for range of suttas e.g. AN /dhp