// from https://stackoverflow.com/questions/13/determine-a-users-timezone
const timezone = -(new Date().getTimezoneOffset()); //in minutes

const now = new Date('12/26/' + (new Date()).getUTCFullYear()).getTime(); //Date.now(); // + timezone * 60 * 1000;
const christmas = new Date('12/25/' + (new Date()).getUTCFullYear()).getTime(); // + timezone * 60 * 1000;

function diffDays(fromMs, toMs) {
  return (toMs - fromMs) / 1000 / 60 / 60 / 24;
}

let eve = document.querySelector('#eve');
const eveNum = Math.ceil(((diffDays(now, christmas) % 365) + 365) % 365);
for (let i = 0; i < eveNum; i++) {
  if (i % 2 === 0) {
    eve.innerHTML += ' <span class="green">Eve</span>';
  } else {
    eve.innerHTML += ' <span class="red">Eve</span>';
  }
}
eve.innerHTML += '!';