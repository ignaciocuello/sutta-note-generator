function parse_sutta_key(key_string) {
    const result = key_string.match(/(^.*):(\d*)\.(\d*)$/)
    if (result != null) {
        const [, sutta, segment, sub_segment] = result;
        return {
            sutta: sutta,
            segment: segment,
            sub_segment: sub_segment
        }
    }
}

module.exports = parse_sutta_key;