const fetch_sutta_as_markdown = require('../src/fetch_sutta_as_markdown');
const fs = require('fs');

test('Return content for SN 12.48 formatted as markdown', async () => {
    let formatted_sutta_text = fs.readFileSync('test/data/SN 12.48.md', 'utf8');
    formatted_sutta_text = formatted_sutta_text.split('\n').slice(2).join('\n');
    const content = await fetch_sutta_as_markdown('SN 12.48');
    expect(content).toBe(formatted_sutta_text);
});