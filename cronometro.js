const navMenu = document.querySelector('#navMenu');

navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

let opcion = '';

const change = (value) => {
  opcion = value;
  console.log(Number(opcion));
};

/*
// ################# ALARMA ################################

function alarm(secondsToRing) {
  let seconds = 1;

  const clock = setInterval(() => {
    if (seconds === secondsToRing) {
      console.log('RING RING RING ');

      clearInterval(clock);
    } else {
      console.log(`Second ${seconds}`);

      seconds++;
    }
  }, 1000);
}

alarm(secondsToRing);

//############## CRONOMETRO ############

function alarm(secondsToRing) {
  let seconds = 0;

  const clock = setInterval(() => {
    if (seconds === secondsToRing) {
      console.log('RING RING RING ');

      clearInterval(clock);
    } else {
      console.log(`Second ${secondsToRing}`);

      secondsToRing--;
    }
  }, 1000);
}

alarm(secondsToRing);*/
