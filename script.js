function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  
  // tamanho aleatorio de cada bolha
  const size = Math.random() * 40 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  
  //posicionamento aleatorio e velocidade aleatoria
  bubble.style.left = `${Math.random() * window.innerWidth}px`; 
  bubble.style.animationDuration = `${Math.random() * 3 + 2}s`; 
  
  //adiciona a bolha no container
  document.querySelector('.bubbles-container').appendChild(bubble);
  
  //depois de 7 segundos, deleta a bolha criada
  setTimeout(() => {
    bubble.remove();
  }, 7000);
}

//Cria a bolha a cada segundo
setInterval(createBubble, 1000);
