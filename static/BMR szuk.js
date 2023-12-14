let nem = '';
let eletmod = '';

function setNem(selectedNem) {
    nem = selectedNem;

    
    if (nem === 'no'){
        document.getElementById("no").style.backgroundColor = "#075b3b";
        document.getElementById("ferfi").style.backgroundColor = "white";
    }
        if (nem === 'ferfi'){
            document.getElementById("ferfi").style.backgroundColor = "#075b3b";
            document.getElementById("no").style.backgroundColor = "white";    
        }        
}

function bmrSzamitas() {

    
    let testtomeg = parseFloat(document.getElementById('test').value);
    let magassag = parseFloat(document.getElementById('mag').value);
    let eletkor = parseInt(document.getElementById('eletkor').value);

    if (isNaN(testtomeg) || isNaN(magassag) || isNaN(eletkor)) {
        alert('Kérlek töltsd ki az összes mezőt');
        //document.getElementById('eredmenyDoboz').textContent = 'Kérlek töltsd ki az összes mezőt!';
        return;
    }
    if (!nem) {
        alert('Kérlek válassz nemet!');
        return;
    }

    let nobmr = 655 + (9.6 * testtomeg) + (1.8 * magassag) - (4.7 * eletkor);
    let ferfibmr = 66 + (13.7 * testtomeg) + (5 * magassag) - (6.8 * eletkor);
    
   if (nem === 'no') {        
        document.getElementById('eredmenyDoboz').textContent = 'Napi női kalória szükséglet: ' + nobmr ;
        document.getElementById("noBmr").style.display = "block"; 
      document.getElementById("ferfiBmr").style.display = "none";

    } 
    else if (nem === 'ferfi') {
        ferfibmr = 66 + (13.7 * testtomeg) + (5 * magassag) - (6.8 * eletkor);
        document.getElementById('eredmenyDoboz').textContent = 'Napi férfi kalória szükséglet: ' + ferfibmr;
        document.getElementById("ferfiBmr").style.display = "block"; 
        document.getElementById("noBmr").style.display = "none";
    }  
}



// Fogyás idejének kiszámítása
/*function TimeCalculator(ujTesttomeg, jelenlegiTesttomeg, differencia) {
    const caloriaPerKg = 7700; // Kalóriák száma 1 kg súlycsökkenéshez
    const differencia = jelenlegiTesttomeg - ujTesttomeg
    const napiSzukseglet = differencia * caloriaPerKg / napKaloriaDeficit; 
    napi kalória deficit =  */