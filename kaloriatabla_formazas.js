function openEl(evt, Name) {
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";  // elrejti azokat az elemeket, amiket nem szeretnénk megjeleníteni
                    }
                    tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");  // eltávolítja az aktív osztályt, az inaktív elemekből
                    }
                    document.getElementById(Name).style.display = "block";
                    evt.currentTarget.className += " active"; // aktív vagy kiválasztott elem állapota
                    }
                            
                // "defaultOpen" elem aktiválása
                document.getElementById("defaultOpen").click();