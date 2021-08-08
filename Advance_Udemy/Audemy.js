

let dom = document.querySelector('.statement');

let xander = 'Get ready!!';


function getSet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('All set');
    }, 500);
  })
}

async function ready() {
  xander = await getSet();
  dom.textContent = xander;
}

ready()