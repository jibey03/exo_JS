function elementsCommuns(liste1, liste2) {
    // Créer un ensemble à partir de la première liste
    let ensemble = new Set(liste1);
    // Filtrer les éléments de la deuxième liste qui sont présents dans l'ensemble
    let communs = liste2.filter(element => ensemble.has(element));
    return communs;
}

function button() {
    
}



liste1 = [2,4,5,0,7]
liste2 = [2,7,6,46,58]

document.write("liste1 = [2,4,5,0,7] \n")

document.write("liste2 = [2,7,6,46,58] \n")

document.write(elementsCommuns(liste1, liste2));