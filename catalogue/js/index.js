for (let i = 0; i < 40; i++) {
  const container = document.createElement('div');
  const marquee = document.createElement('div');
  const content = document.createElement('h1');

  content.innerHTML = 'MANASI VASHI ';
  marquee.classList.add('marquee3k');
  marquee.style.background = `black`;
  marquee.dataset.speed = (Math.random() * 0.45) + 0.1;
   
  container.classList.add('container');
  container.style.transform = `rotate(${Math.random() * 45}deg)`;
  
  marquee.appendChild(content);
  container.appendChild(marquee);
  document.body.appendChild(container);
}

Marquee3k.init();

function getRandom() {
  return Math.floor(Math.random() * 300);
}
