const note_suttas = require('../src/note_suttas');
const fs = require('fs');
jest.mock('fs');

test('output note for SN 12.48 to Notes/Suttas/SN 12.48.md when file does not exist', async () => {
    const options = {
        sutta: 'SN 12.48',
        output_directory: 'Notes/Suttas'
    };

    const sutta_contents =
        `### Sutta

#### A Cosmologist 

>At Sāvatthī.
>
>Then a brahmin cosmologist went up to the Buddha … Seated to one side he said to the Buddha:
>
>“Master Gotama, does all exist?”
>
>“‘All exists’: this is the oldest cosmology, brahmin.”
>
>“Then does all not exist?”
>
>“‘All does not exist’: this is the second cosmology.
>
>“Well, is all a unity?”
>
>“‘All is a unity’: this is the third cosmology.
>
>“Then is all a plurality?”
>
>“‘All is a plurality’: this is the fourth cosmology.
>
>Avoiding these two extremes, the Realized One teaches by the middle way: ‘Ignorance is a condition for choices.
>
>Choices are a condition for consciousness. … That is how this entire mass of suffering originates. When ignorance fades away and ceases with nothing left over, choices cease. When choices cease, consciousness ceases. … That is how this entire mass of suffering ceases.’”
>
>When he said this, the brahmin cosmologist said to the Buddha, “Excellent, Master Gotama! Excellent! … From this day forth, may Master Gotama remember me as a lay follower who has gone for refuge for life.”`
    const succesful = await note_suttas(options);
    expect(fs.writeFileSync).toHaveBeenCalledWith('Notes/Suttas/SN 12.48.md', sutta_contents);
    expect(succesful).toBe(1);
});