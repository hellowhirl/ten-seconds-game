import { useState } from "react";
import "./App.css";
import { GameButton } from "./components/GameButton";
// import readySound from "./assets/ready2count_optimal.m4a";

function App() {
  const tempVar = ["", "Ready", "Ready", "3", "2", "1", "Go!"];

  const state = {
    gameOver: false,
    time: 0,
    startTime: 0,
    updatedTime: 0,
    instructionText: [
      "press START",
      "press STOP after 10 seconds",
      "game over",
    ],
  };

  const [gameOn, setGameOn] = useState(false);
  const [countDownText, setcountDownText] = useState(tempVar);
  const [secondsCountingStarted, setSecondsCountingStarted] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const onStartButtonClicked = () => {
    // audioReady.play();
    setGameOn(true);
    handleCountdownText();
  };

  const handleCountdownText = () => {
    const counter = countDownText;

    if (counter.length > 1) {
      setTimeout(() => {
        counter.shift();
        setcountDownText(counter);
        handleCountdownText();
      }, 1000);
    } else {
      clockStart();
      setSecondsCountingStarted(true);
    }
  };

  const tick = () => {};

  const clockStart = () => {
    // setStartTime(new Date().getTime());
    // this.intervalID = setInterval(() => this.tick(), 10);
  };

  const clockStop = () => {};

  const addTimerClasses = () => {};

  const addDifferenceClasses = () => {};

  const resetGame = () => {};

  const setInstructions = () => {};

  const setInstructionsClasses = () => {};

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
