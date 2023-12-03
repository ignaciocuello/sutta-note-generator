//takes suttas_file is the file name containing all suttas separated by a new line
//otherwise sutta is the name of the sutta, finally output_directory is the name of the directory to output to
//this function will parse the sutta file into a list of suttas or otherwise just grab the single sutta
//then it will call the note_sutta function on each sutta. Returns the number of suttas successfully output

function note_suttas(options) {
    const { suttas_file, sutta, output_directory } = options;
    let suttas = [];
    if (suttas_file) {
        let suttas_text = fs.readFileSync(suttas_file, 'utf8');
        suttas = suttas_text.split('\n');
    } else if (sutta) {
        suttas = [sutta];
    } else {
        console.log("No sutta or sutta file given");
        return 0;
    }
    //TODO: this should only succeed if all suttas succeed, and only update the files in that case
    let successful;
    for (successful = 0; i < suttas.length; i++) {
        //note_sutta(suttas[i], output_directory);
    }
    return successful;
}

function note_sutta(sutta, output_directory) {

}


module.exports = note_suttas;