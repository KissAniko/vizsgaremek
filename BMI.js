


let valasztottNem = "no";
function setNem (nem){
  valasztottNem = nem;
}

function bmiSzamitas(){

let testtomegInput = document.getElementById("test");
let magassagInput = document.getElementById("mag");
let eletkorInput = document.getElementById("eletkor");

let testtomeg = parseInt(testtomegInput.value);
let magassag = parseInt(magassagInput.value);
let eletkor = parseInt(eletkorInput.value);

// vagy   let testtomeg = parseFloat(document.getElementById("test").value);
//         let magassag = parseFloat(document.getElementById("mag").value);

if (isNaN(testtomeg) || isNaN(magassag) || magassag < 100 ||  magassag > 220  || testtomeg < 40 
    || testtomeg > 150 || magassag % 1 !== 0 || testtomeg % 1 !== 0 || eletkor % 1 !== 0) {
    alert("Kérem, adjon meg olyan valós értéket, amely a megadott intervallumon belül van!");
    return;
}

  let eletkorE = eletkor/eletkor;
  let magassagM = magassag / 100;
  let bmi = testtomeg / (magassagM * magassagM) * eletkorE;
  let eredmenyDoboz = document.getElementById("eredmenyDoboz");
  eredmenyDoboz.value = "A BMI értéke: " + bmi.toFixed(2); 

 // document.getElementById("bmiEredmeny").innerHTML = "BMI-d értéke: "+ bmi.toFixed(2);  

if (valasztottNem === "no"){
  
  
document.getElementById("noTabla").style.display = "block"; 
    document.getElementById("ferfiTabla").style.display = "none";
                      
}
if (valasztottNem === "ferfi"){
 
document.getElementById("noTabla").style.display = "none"; // Hide the 'noTabla' table
    document.getElementById("ferfiTabla").style.display = "block";
      
}

          

}
