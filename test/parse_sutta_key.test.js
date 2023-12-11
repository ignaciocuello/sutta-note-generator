const parse_sutta_key = require('../src/parse_sutta_key');

test('Parse sutta key for an1.1:0.2', () => { 
    const key_string = 'an1.1:0.2';
    const key = parse_sutta_key(key_string);
    expect(key.sutta).toBe('an1.1');
    expect(key.segment).toBe('0');
    expect(key.sub_segment).toBe('2');
});

test('Parse sutta key for sn12.48:7.4', () => {
    const key_string = 'sn12.48:7.4';
    const key = parse_sutta_key(key_string);
    expect(key.sutta).toBe('sn12.48');
    expect(key.segment).toBe('7');
    expect(key.sub_segment).toBe('4');
});

test('Parse sutta key for dhp19:1', () => {
    const key_string = 'dhp19:1';
    const key = parse_sutta_key(key_string);
    expect(key.sutta).toBe('dhp19');
    expect(key.segment).toBe('1');
    expect(key.sub_segment).toBe(undefined);
});

test('Parse sutta key for mn19:4-5.6', () => {
    const key_string = 'mn19:4-5.6';
    const key = parse_sutta_key(key_string);
    expect(key.sutta).toBe('mn19');
    expect(key.segment).toBe('4-5');
    expect(key.sub_segment).toBe('6');
});