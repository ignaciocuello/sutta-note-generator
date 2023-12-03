const get_sutta_json = require('../src/get_sutta_json')
const fs = require('fs')

beforeEach(() => {
    const mock_json = fs.readFileSync('test/data/SN12.48.json', 'utf8');
    fetchMock.mockIf(/^https?:\/\/suttacentral.net\/api\/bilarasuttas*$/, req => {
        if (req.url.endsWith('/sn12.48/sujato?lang=en')) {
          return {
            status: 200,
            body: mock_json
          }
        } else {
          return {
            status: 404,
            body: 'Not Found'
          }
        }
      })
})

test('Return json for SN 12.48', () => {
    //TODO mock get request to return above json file
    const sutta_json = get_sutta_json('SN 12.48');
    expect(sutta_json.root_text['sn12.48:0.3']).toBe('Lokāyatikasutta');
    expect(sutta_json.translation['sn12.48:0.3']).toBe('A Cosmologist');
});