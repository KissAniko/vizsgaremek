function idoKalkulacioGomb() {
                const leadniKivantKg = parseFloat(document.getElementById("leadniKivantKg").value);
               // const kaloriaPerKg = 7700; // Kalóriák száma 1 kg súlycsökkenéshez
                
                const napiKaloriaDeficit = 1000; //  napi 1000 kalóriás deficit, ami heti 1 kg-nak felel meg 

                
                if (leadniKivantKg < 0 || leadniKivantKg > 100 ) {
                  alert("Kérlek, adj meg olyan valós értéket, amely a megadott intervallumon belül van!");
                  return;
              }
          
                // Kiszámoljuk a szükséges napokat a cél eléréséhez
                const napok = (leadniKivantKg * 7700) / napiKaloriaDeficit;
          
                // Az aktuális dátumhoz hozzáadjuk a napokat a célDátumának meghatározásához
                const mostaniDatum = new Date();
                const celDatum = new Date(mostaniDatum);
                celDatum.setDate(mostaniDatum.getDate() + napok);
          
                // Az eredményt formázzuk megfelelő dátum formátumba
                const formazottDatum = `${celDatum.getFullYear()}-${(celDatum.getMonth() + 1).toString().padStart(2, '0')}-${celDatum.getDate().toString().padStart(2, '0')}`;
          
                // Eredmény megjelenítése
                document.getElementById("datumEredmeny").textContent = formazottDatum;
              }
