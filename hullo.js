document.addEventListener('DOMContentLoaded', function () {
                    const container = document.getElementById('container5');
                    const image = document.getElementById('rezgosmile');
              
                    function createFruit() {
                      const fruits = ['🍎', '🍌', '🍇', '🍓', '🍊', '🍑', '🍍', '🍉', '🍒','🍈',
                       'Pihenés', 'Vízfogyasztás', 'Futás', 'Fehérje', 'A-vitamin', 'B-vitamin', 'C-vitamin',
                        'D-vitamin', 'E-vitamin','K-vitamin', 'Mg', 'Ca', 'K', 'Fe', 'Alvás', 'Kalóriaszámlálás', 
                        'Gyaloglás', 'Úszás', 'Kevés szénhidrát', 'Diéta'];
                      const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
              
                      const fruitElement = document.createElement('div');
                      fruitElement.className = 'falling-fruit';
                      fruitElement.style.left = `${Math.random() * 50}vw`; // Adjust left position
                      fruitElement.innerHTML = randomFruit;
              
                      container.appendChild(fruitElement);
              
                      setTimeout(() => {
                        fruitElement.style.animationDuration = `${Math.random() * 2 + 3}s`;
                        fruitElement.style.left = `${Math.random() * 50}vw`; // Adjust left position
                        fruitElement.style.opacity = 10;
                        fruitElement.style.transform = 'translateY(300%)';
                      }, 1);
                    }
              
                    container.addEventListener('click', createFruit);
              
                    image.addEventListener('mouseover', function() {
                      image.classList.add('enlarged');
                      createFruit();
                    });
              
                    image.addEventListener('mouseout', function() {
                      image.classList.remove('enlarged');
                    });
                  });