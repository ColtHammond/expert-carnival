function keydownAction(event) {
  document.querySelector("#key").innerHTML = event.key;
  document.querySelector("#code").innerHTML = event.keyCode;
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);