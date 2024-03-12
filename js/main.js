import "/css/style.css";
import javascriptLogo from "/images/javascript.svg";
import viteLogo from "/images/vite.svg";
import { setupCounter } from "/js/counter";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <div>
  <p id="currentDate"></p>
  <p id="daysSinceStart"></p>
</div>
`;

setupCounter(document.querySelector("#counter"));