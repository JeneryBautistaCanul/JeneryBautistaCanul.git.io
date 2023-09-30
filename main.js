let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1500)
  .typeString('Br. Ingeniería en Sistemas y Computación')
  .pauseFor(200)
  .deleteChars(10)
  .start();