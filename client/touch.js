const DOT_SIZE = 20;

document.addEventListener(
  "touchstart", e => {
    e.preventDefault()
    ;[...e.changedTouches].forEach(touch => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.style.top = `${touch.pageY - DOT_SIZE}px`;
      dot.style.left = `${touch.pageX - DOT_SIZE}px`;
      dot.id = touch.identifier;
      document.body.appendChild(dot);
  });
});

document.addEventListener(
  "touchmove", e => {
    ;[...e.changedTouches].forEach(touch => {
      const dot = document.getElementById(touch.identifier);
      dot.style.top = `${touch.pageY - DOT_SIZE}px`;
      dot.style.left = `${touch.pageX - DOT_SIZE}px`;
  });
});

document.addEventListener(
  "touchend", e => {
    ;[...e.changedTouches].forEach(touch => {
      const dot = document.getElementById(touch.identifier);
      dot.remove();
  });
});

document.addEventListener(
  "touchcancel", e => {
    ;[...e.changedTouches].forEach(touch => {
      const dot = document.getElementById(touch.identifier);
      dot.remove();
  });
});