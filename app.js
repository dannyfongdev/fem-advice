// Advice API
const advice = new Advice();

// UI - index.html
const adviceId = document.querySelector('#advice-id');
const adviceString = document.querySelector('#advice-string');

// Click dice event listening
document.querySelector("#dice-button").addEventListener('click', (e) => {
  getAdvice();
})

function getAdvice() {
  advice.getAdvice()
    .then(result => {
      paintUI(result.id, result.advice);
    })
    .catch(err => console.log(err));
}

function paintUI(id, advice) {
  console.log(id, advice);
  adviceId.textContent = id;
  adviceString.textContent = advice;
}

getAdvice();