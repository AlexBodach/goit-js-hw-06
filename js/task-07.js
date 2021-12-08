const rangeValue = document.querySelector('#font-size-control');
const textWithRange = document.querySelector('#text');

rangeValue.addEventListener('input', () => {
    textWithRange.innerHTML = ' ';
    textWithRange.insertAdjacentHTML("beforeend", 
    `<span id="text" style="font-size: ${rangeValue.value}px">
    Abracadabra!</span>`);
  });