import "./App.css";

import Form from "./components/Form";
import { MdLightbulbOutline } from "react-icons/md";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="header-logo"
          src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
          alt="Google Keep logo"
        ></img>
        <h2 className="header-title">Keep</h2>
      </header>
      <Form />
      <div className="placeholder">
        <MdLightbulbOutline className="placeholder-icon" />
        <p className="placeholder-text">Notes you add appear here</p>
      </div>
    </div>
  );
}

export default App;
