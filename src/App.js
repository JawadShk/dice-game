import { useState } from 'react';
import './App.css';
import StartGame from './StartGame';
import GamePlay from './GamePlay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = ()=>{
    // setIsGameStarted ((prev) => !prev)
    setIsGameStarted(!isGameStarted);
  }

  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
