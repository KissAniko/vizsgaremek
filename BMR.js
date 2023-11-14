

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
getActivity()
    
    let testtomeg = parseInt(document.getElementById('test').value);
    let magassag = parseInt(document.getElementById('mag').value);
    let eletkor = parseInt(document.getElementById('eletkor').value);

    if (isNaN(testtomeg) || isNaN(magassag) || isNaN(eletkor)) {
        alert('Kérlek töltsd ki az összes mezőt!');
        //document.getElementById('eredmenyDoboz').textContent = 'Kérlek töltsd ki az összes mezőt!';
        return;        
    }

if ( magassag < 100 ||  magassag > 220  || testtomeg < 40 
    || testtomeg > 150  || eletkor < 18 || eletkor > 100) {
    alert("Kérlek, adj meg olyan valós értéket, amely a megadott intervallumon belül van!");
    return;
}
if (testtomeg %1 !== 0 || magassag %1 !== 0 || eletkor %1 !== 0){
    alert('Csak egész számot adhatsz meg!')
    return;
}
if (!nem) {
    alert('Kérlek válassz nemet!');
    return;
}
   
    let nobmr = 655 + (9.6 * testtomeg) + (1.8 * magassag) - (4.7 * eletkor);
    let ferfibmr = 66 + (13.7 * testtomeg) + (5 * magassag) - (6.8 * eletkor)
    

function getActivity(){
    let selectedValue = document.getElementById('tartalom').value;

    switch (selectedValue) {
        case 'ulo':
            eletmod = 1.2;
            break;
        case 'enyhe':
            eletmod = 1.375;
            break;
        case 'kozepes':
            eletmod = 1.55;
            break;
        case 'aktiv':
            eletmod = 1.725;
            break;
        case 'naktiv':
            eletmod = 1.9;
            break;
        default:
            // Ha egyik eset sem egyezik 
            eletmod = 1.2;
            alert('Érvénytelen opció van kiválasztva');
            break;
    }
}

 if (nem === 'no'){
   let kaloriaSzukseglet = Math.round(nobmr *  eletmod);
  document.getElementById('eredmenyDoboz').innerHTML = 'Napi bevitt kalória (nő): ' + kaloriaSzukseglet + ' '+'kcal'; 
 }
 if (nem === 'ferfi'){
    let kaloriaSzukseglet = Math.round(ferfibmr * eletmod);
    document.getElementById('eredmenyDoboz').innerHTML = 'Napi bevitt kalória (férfi): ' + kaloriaSzukseglet + ' '+'kcal'; 
 }
}  




