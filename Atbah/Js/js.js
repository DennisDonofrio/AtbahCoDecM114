var primo = 74;     // inizio del primo set di lettere
var secondo = 92;   // inizio del secondo set di lettere
var terzo = 109;    // inizio del terzo set di lettere

function cifraLettera(lettera){
    var codice = lettera.charCodeAt();
    codice -= 64;
    if(codice >= 0 && codice <= 9){         //primo set di lettere
        if(codice + 64 == primo - codice){
            return secondo - 14;
        }else{
            return primo - codice;
        }
    }else if(codice >= 10 && codice <= 18){ //secondo set di lettere
        if(codice + 64 == secondo - codice){
            return primo - 5;
        }else{
            return secondo - codice;
        }
    }else if(codice >= 19 && codice <= 26){ //terzo set di lettere
        return terzo - codice;
    }else{
        return lettera.charCodeAt();
    }
}

function cifra(){
    var frase = document.getElementById("in").value;
    frase = frase.toUpperCase();
    document.getElementById("in").value = frase;
    var cifrato = "";
    for(var i = 0; i < frase.length; i++){
        cifrato += String.fromCharCode(cifraLettera(frase.charAt(i)));
    }
    document.getElementById("cifrato").innerHTML = cifrato;
}

function insertValues(){
    cifra();
    document.getElementById("decifrato").innerHTML = document.getElementById("in").value;
}