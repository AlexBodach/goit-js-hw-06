const ref = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  text: document.querySelector("span.color")
}

function getRandomHexColor() {  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
}

function setNewBackgroundColr () {
  ref.text.textContent = getRandomHexColor();  
  ref.body.style.backgroundColor = ref.text.textContent; 
}

ref.btn.addEventListener("click", setNewBackgroundColr)


