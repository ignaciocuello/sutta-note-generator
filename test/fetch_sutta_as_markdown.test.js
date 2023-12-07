const fetch_sutta_as_markdown = require('../src/fetch_sutta_as_markdown');
const fs = require('fs');

test('Return content for SN 12.48 formatted as markdown', async () => {
    let formatted_sutta_text = fs.readFileSync('test/data/SN 12.48.md', 'utf8');
    formatted_sutta_text = formatted_sutta_text.split('### Sutta\n\n')[1]
    const content = await fetch_sutta_as_markdown('SN 12.48');
    expect(content).toBe(formatted_sutta_text);
});

test('Return content for AN 1.1 formatted as markdown', async () => {
    let formatted_sutta_text = fs.readFileSync('test/data/AN 1.1.md', 'utf8');
    formatted_sutta_text = formatted_sutta_text.split('### Sutta\n\n')[1]
    const content = await fetch_sutta_as_markdown('AN 1.1');
    expect(content).toBe(formatted_sutta_text);
});