const validInput = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let count = 0;
const btns = document.querySelectorAll(".btn");
const output = document.querySelector(".screen");
const theme = document.querySelector(".slider");
let prev = null;
let add = false;
let operation = "";
let curr = null;

if (localStorage.getItem("theme") === "") {
  const body = document.querySelector("body");
  body.classList.remove("vintage");
  body.classList.remove("retro");
} else if (localStorage.getItem("theme") === "vintage") {
  const body = document.querySelector("body");
  body.classList.remove("retro");
  body.classList.add("vintage");
} else if (localStorage.getItem("theme") === "retro") {
  const body = document.querySelector("body");
  body.classList.remove("vintage");
  body.classList.add("retro");
}
btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (validInput.includes(event.target.innerText) && count < 10) {
      ++count;
      if (output.innerText === "0.") {
        output.innerText += event.target.innerText;
      } else if (parseFloat(output.innerText) === 0) {
        output.innerText = event.target.innerText;
      } else {
        output.innerText += event.target.innerText;
      }
    }
    if (
      event.target.innerText === "DEL" &&
      output.innerText === "No divison by Zero"
    ) {
      output.innerText = "0";
      count = 0;
      add = false;
      prev = null;
      curr = null;
    }
    if (event.target.innerText === "DEL" && output.innerText.length > 1) {
      --count;
      const newoutput = output.innerText.substring(
        0,
        output.innerText.length - 1
      );
      output.innerText = newoutput;
    }
    if (event.target.innerText === "DEL" && output.innerText.length === 1) {
      output.innerText = "0";
      count = 0;
      add = false;
      prev = null;
      curr = null;
    }

    if (event.target.innerText === "." && !add && output.innerText === "0") {
      output.innerText = `0${event.target.innerText}`;
      add = true;
    }
    if (event.target.innerText === "." && !add && output.innerText === "") {
      output.innerText = `0${event.target.innerText}`;
      add = true;
    }
    if (event.target.innerText === "." && !add) {
      output.innerText += event.target.innerText;
      add = true;
    }
    if (event.target.innerText === "RESET") {
      output.innerText = "0";
      add = false;
      count = 0;
      prev = null;
      curr = null;
    }
    if (event.target.innerText === "+" && prev === null) {
      prev = parseFloat(output.innerText);
      add = false;
      count = 0;
      operation = "+";
      output.innerText = "";
    }
    if (event.target.innerText === "-" && prev === null) {
      prev = parseFloat(output.innerText);
      add = false;
      count = 0;
      operation = "-";
      output.innerText = "";
    }
    if (event.target.innerText === "x" && prev === null) {
      prev = parseFloat(output.innerText);
      add = false;
      count = 0;
      operation = "x";
      output.innerText = "";
    }
    if (event.target.innerText === "/" && prev === null) {
      prev = parseFloat(output.innerText);
      add = false;
      count = 0;
      operation = "/";
      output.innerText = "";
    }
    if (event.target.innerText === "=" && prev !== null) {
      curr = parseFloat(output.innerText);
      switch (operation) {
        case "+":
          output.innerText = prev + curr;
          prev = null;
          curr = null;
          count = 0;
          add = false;
          break;
        case "-":
          output.innerText = prev - curr;
          prev = null;
          curr = null;
          count = 0;
          add = false;
          break;
        case "/":
          curr === 0
            ? (output.innerText = "No divison by Zero")
            : (output.innerText = prev / curr);

          prev = null;
          curr = null;
          count = 0;
          add = false;
          break;
        case "x":
          output.innerText = prev * curr;
          prev = null;
          curr = null;
          count = 0;
          add = false;
          break;
      }
    }
  });
});

theme.addEventListener("click", () => {
  const body = document.querySelector("body");
  if (
    !body.classList.contains("vintage") &&
    !body.classList.contains("retro")
  ) {
    body.classList.add("vintage");
    localStorage.setItem("theme", "vintage");
  } else if (
    body.classList.contains("vintage") &&
    !body.classList.contains("retro")
  ) {
    body.classList.remove("vintage");
    localStorage.setItem("theme", "retro");
    body.classList.add("retro");
  } else if (
    !body.classList.contains("vintage") &&
    body.classList.contains("retro")
  ) {
    body.classList.remove("vintage");
    body.classList.remove("retro");
    localStorage.setItem("theme", "");
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function (e) {
    const colorScheme = e.matches ? "dark" : "light";

    if (colorScheme === "dark") {
      document.body.classList.remove("vintage");
      document.body.classList.remove("retro");
      localStorage.setItem("theme", "");
      if (localStorage.getItem("theme") === "") {
        const body = document.querySelector("body");
        body.classList.remove("vintage");
        body.classList.remove("retro");
      } else if (localStorage.getItem("theme") === "vintage") {
        const body = document.querySelector("body");
        body.classList.remove("retro");
        body.classList.add("vintage");
      } else if (localStorage.getItem("theme") === "retro") {
        const body = document.querySelector("body");
        body.classList.remove("vintage");
        body.classList.add("retro");
      }
    } else {
      document.body.classList.add("vintage");
      document.body.classList.remove("retro");
      localStorage.setItem("theme", "vintage");
      if (localStorage.getItem("theme") === "") {
        const body = document.querySelector("body");
        body.classList.remove("vintage");
        body.classList.remove("retro");
      } else if (localStorage.getItem("theme") === "vintage") {
        const body = document.querySelector("body");
        body.classList.remove("retro");
        body.classList.add("vintage");
      } else if (localStorage.getItem("theme") === "retro") {
        const body = document.querySelector("body");
        body.classList.remove("vintage");
        body.classList.add("retro");
      }
    }
  });
