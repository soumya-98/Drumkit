function keydown(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //   STOPS THE FUNCTION FROM RUNNING WHEN DIFF BTN CLICKED
  if (!audio) return;
  //   REWIND TO THE START
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
// EVENT LISTENERS
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", keydown);
