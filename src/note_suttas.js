const sutta_note_content = require('./sutta_note_content');
const { program } = require('commander');
const path = require('path');
const fs = require('fs');

//takes suttas_file is the file name containing all suttas separated by a new line
//otherwise sutta is the name of the sutta, finally output_directory is the name of the directory to output to
//this function will parse the sutta file into a list of suttas or otherwise just grab the single sutta
//then it will call the note_sutta function on each sutta. Returns the number of suttas successfully output

async function note_suttas(options) {
    const { suttas_file, sutta, output_directory } = options;
    let suttas = [];
    if (suttas_file) {
        let suttas_text = fs.readFileSync(suttas_file, 'utf8');
        suttas = suttas_text.split('\n');
        suttas = suttas.map(sutta => sutta.replace('*', '')).filter(sutta => !sutta.startsWith('//'))
    } else if (sutta) {
        suttas = [sutta];
    } else {
        console.log("No sutta or sutta file given");
        return 0;
    }
    //TODO: this should only succeed if all suttas succeed, and only update the files in that case
    let output = []
    for (let i = 0; i < suttas.length; i++) {
        console.log(`"${suttas[i]}"`);
        const content = await sutta_note_content(suttas[i], output_directory);
        if (content) {
            output.push({sutta: suttas[i], content: content});
            console.log('Noted ' + suttas[i]);
        } else {
            console.error(`Error noting ${suttas[i]}`)
        }
    }

    if (output.length == suttas.length) {
        for (let i = 0; i < output.length; i++) {
            const sutta = output[i].sutta;
            const content = output[i].content;
            const sutta_file = path.join(output_directory, `${sutta}.md`);
            fs.writeFileSync(sutta_file, content);
        }
    }
   return output.length;
}

program
.requiredOption('-o, --output_directory <directory>', 'Directory to output to')
.requiredOption('-s, --sutta <id>', 'Sutta to note')
program.parse();

const options = program.opts();

(async () => { await note_suttas(options); })();


module.exports = note_suttas;