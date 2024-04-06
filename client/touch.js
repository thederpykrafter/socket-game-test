const buttonUp = document.getElementById("up");
const buttonDown = document.getElementById("down");
const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");

buttonUp.addEventListener("touchstart", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "up",
      state: true,
    });
  });
});

buttonUp.addEventListener("touchmove", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "up",
      state: true,
    });
  });
});

buttonUp.addEventListener("touchend", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "up",
      state: false,
    });
  });
});

buttonUp.addEventListener("touchcancel", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "up",
      state: false,
    });
  });
});

buttonDown.addEventListener("touchstart", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "down",
      state: true,
    });
  });
});

buttonDown.addEventListener("touchmove", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "down",
      state: true,
    });
  });
});

buttonDown.addEventListener("touchend", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "down",
      state: false,
    });
  });
});

buttonDown.addEventListener("touchcancel", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "down",
      state: false,
    });
  });
});

buttonLeft.addEventListener("touchstart", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "left",
      state: true,
    });
  });
});

buttonLeft.addEventListener("touchmove", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "left",
      state: true,
    });
  });
});

buttonLeft.addEventListener("touchend", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "left",
      state: false,
    });
  });
});

buttonLeft.addEventListener("touchcancel", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "left",
      state: false,
    });
  });
});

buttonRight.addEventListener("touchstart", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "right",
      state: true,
    });
  });
});

buttonRight.addEventListener("touchmove", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "right",
      state: true,
    });
  });
});

buttonRight.addEventListener("touchend", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "right",
      state: false,
    });
  });
});

buttonRight.addEventListener("touchcancel", (e) => {
  [...e.changedTouches].forEach(() => {
    socket.emit("keypress", {
      inputId: "right",
      state: false,
    });
  });
});
