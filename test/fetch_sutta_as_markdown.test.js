const fetch_sutta_as_markdown = require('../src/fetch_sutta_as_markdown');
const fs = require('fs');

test('Return content for SN 12.48 formatted as markdown', () => {
    const formatted_sutta_text = fs.readFileSync('test/data/SN12.48.md', 'utf8');
    const content = fetch_sutta_as_markdown('SN 12.48');
    expect(content).toBe(formatted_sutta_text);
});