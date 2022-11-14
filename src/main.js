import { setupParser } from "./parser.js";
import "./styles.css";

document.querySelector("#app").innerHTML = `
  <h1>URL Parser</h1>
  <form>
    <label for="format">Format: (*)
      <input type="text" name="format" id="format" placeholder="Format" required />
    </label>
    <label for="url">URL: (*)
      <input type="text" name="url" id="url" placeholder="URL to parse" required />
    </label>
    <button>Parse</button>
  </form>
  <hr/>
  <h3>Result:</h3>
  <code>
    <pre id="result">{}</pre>
  </code>
`;

setupParser(document.querySelector("form"), document.querySelector("#result"));
