const message = `
Dear you,

Thank you for every small moment,
every laugh, every memory we created together.

Some days may pass quietly,
but you always stay somewhere
inside my favorite thoughts.

If someday you read this again,
I hope you remember —
you were deeply loved.

`;

let i = 0;
const speed = 35;
const textElement = document.getElementById("text");

function typeWriter(){
  if(i < message.length){
    textElement.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

const container = document.getElementById("petals-container");

function createPetal(){

  const petal = document.createElement("img");

  petal.src = "immage/petal.png";
  petal.classList.add("petal");

  // random position
  petal.style.left = Math.random() * window.innerWidth + "px";

  // random size
  const size = 20 + Math.random()*25;
  petal.style.width = size + "px";

  // random speed
  const duration = 6 + Math.random()*6;
  petal.style.animationDuration = duration + "s";

  container.appendChild(petal);

  // remove after fall
  setTimeout(()=>{
    petal.remove();
  }, duration*1000);
}

/* create petals continuously */
setInterval(createPetal, 500);