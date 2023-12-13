class Etel {
  constructor(nev, kaloria, tipus) {
    this.nev = nev;
    this.kaloria = kaloria;
    this.tipus = tipus;
  }
}

const lista = [];



//document.getElementById('loadDataButton').addEventListener('click', function () {


window.addEventListener('load', ()=>{
fetch('Ételadatok.csv')
    .then(response => response.text())
    .then(data => {
      // Adatok feldolgozása és HTML táblázattá alakítása
      const rows = data.split('\n');
      const table = document.getElementById('adatok-táblázat');
      table.innerHTML = ''; // Táblázat tartalmának törlése

      for (const row of rows) {
        const columns = row.split(',');
        const newRow = document.createElement('tr');
        const adat = new Etel(columns[0], columns[1], columns[2]);
        lista.push(adat);
        //console.log(lista[0].nev);
        for (const column of columns) {
          const cell = document.createElement('td');
          cell.textContent = column;
          newRow.appendChild(cell);
        }
        table.appendChild(newRow);
      }
    })
    .catch(error => {
      console.error('Hiba történt:', error);
    });
});

document.getElementById('searchButton').addEventListener('click', function () {
  //Állati
  let adatokTabla = document.getElementById("adatok-táblázat")
  adatokTabla.style.display = "none"


  document.getElementById("keres-tablazat").innerHTML = ""; //Táblázat törlése
  const table = document.getElementById('keres-tablazat');
  const valasztott = document.getElementById("valaszt").value;
  document.getElementById("keresettTipus").innerHTML = valasztott;
  for (let i = 0; i < lista.length; i++) {
    const x = lista[i];
    if (x.tipus.includes(valasztott)) {
      const newRow = document.createElement('tr');
      const cell = document.createElement('td');
      cell.textContent = x.nev;
      newRow.appendChild(cell);
      const cell2 = document.createElement('td');
      cell2.textContent = x.kaloria;
      newRow.appendChild(cell2);
      table.appendChild(newRow);
    }
  }
});


//--------------------------------------------------------------------

