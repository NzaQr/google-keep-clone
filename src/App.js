import "./App.css";
import Form from "./components/Form";
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
    </div>
  );
}

export default App;
