require('jest-fetch-mock').enableMocks()
const { get_sutta_json, get_suttaplex_json } = require('../src/get_sutta_json')
const fs = require('fs')

beforeEach(() => {
    fetch.resetMocks();
})

test('Return json for SN 12.48', async () => {
    const mock_sutta_json = fs.readFileSync('test/data/SN 12.48.json', 'utf8');
    const mock_suttaplex_json = fs.readFileSync('test/data/SN 12.48.suttaplex.json', 'utf8');
    fetchMock.mockIf(/^https:\/\/suttacentral\.net.*$/, async req => {
        if (req.url.endsWith('/api/bilarasuttas/sn12.48/sujato?lang=en')) {
            return mock_sutta_json;
        } else if (req.url.endsWith('/api/suttas/sn12.48/sujato?lang=en&siteLanguage=en')) {
            return mock_suttaplex_json;
        } else {
            return {
                status: 404,
                body: 'Not Found'
            }
        }
    });
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

test('Return json for AN 1.1', async () => {
    const mock_sutta_json = fs.readFileSync('test/data/AN 1.1-10.json', 'utf8');
    const mock_suttaplex_json = fs.readFileSync('test/data/AN 1.1.suttaplex.json', 'utf8');
    fetchMock.mockIf(/^https:\/\/suttacentral\.net.*$/, async req => {
        if (req.url.endsWith('/api/bilarasuttas/an1.1-10/sujato?lang=en')) {
            return mock_sutta_json;
        } else if (req.url.endsWith('/api/suttas/an1.1/sujato?lang=en&siteLanguage=en')) {
            return mock_suttaplex_json;
        } else {
            return {
                status: 404,
                body: 'Not Found'
            }
        }
    });
    const sutta_json = await get_sutta_json('AN 1.1');
    expect(sutta_json.root_text['an1.1:1.1']).toBe('Evaṁ me sutaṁ—');
    expect(sutta_json.translation_text['an1.1:1.1']).toBe('So I have heard. ');
});