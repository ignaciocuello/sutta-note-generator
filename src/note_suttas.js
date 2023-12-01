//takes suttas_file is the file name containing all suttas separated by a new line
//otherwise sutta is the name of the sutta, finally outputfile is the name of the file to output to
//this function will parse the sutta file into a list of suttas or otherwise just grab the single sutta
//then it will call the note_sutta function on each sutta

function note_suttas(options) {
    const { suttas_file, sutta, outputfile } = options;
    var suttas = [];
    if (suttas_file) {
        var suttas_text = fs.readFileSync(suttas_file, 'utf8');
        suttas = suttas_text.split('\n');
    } else if (sutta) {
        suttas = [sutta];
    } else {
        console.log("No sutta or sutta file given");
        return;
    }
    for (var i = 0; i < suttas.length; i++) {
        //note_sutta(suttas[i], outputfile);
    }
}
