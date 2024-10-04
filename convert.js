function convertirCF() {
    let CF = prompt("A què vols convertir C/F?");
    let temp = parseFloat(prompt("Temperatura:"));
    if( CF.toUpperCase() == "C" ){
        let cent = (temp-32)/(9.0/5.0);
        console.log(`${temp}F -> ${cent}C`);
    }else if (CF.toUpperCase() == "F"){
        let fh = (9.0/5.0) * temp + 32;
        console.log(`${temp}C -> ${fh}F`);
    }else {
        console.log("Només es pot C ó F");
    }
}
