import "./App.css";
import { GameButton } from "./components/GameButton";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>10 Seconds</h1>
        <h4 className="row justify-content-center">the game</h4>
        <GameButton />
      </div>
    </div>
  );
}

export default App;
