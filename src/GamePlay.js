import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice";
import TotalScore from "./TotalScore"
import styled from "styled-components";
import { useState } from "react";
import {Button, OutLineButton} from './Styled/Button';
import Rules from "./Rules";

const MainContainer = styled.main`

padding-top: 72px;

.top_section{
  display: flex;
  justify-content: space-around;
  text-align: end
}

.buttons{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
`;
 
const GamePlay = () => {

  const [score, SetScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error , setError] = useState();
  const [showRules, SetShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };


    const roleDice = () =>{
      if(!selectedNumber) {
        setError("You Have Not Selected Any Number");
        return
      }
      else{
        setError("");
      }

      const randomNumber = generateRandomNumber(1,6);
      setCurrentDice(randomNumber);


      if(selectedNumber === randomNumber){
        SetScore((prev) => prev + randomNumber);
      }
      else{
        SetScore((prev) => prev - 2);
      }
      setSelectedNumber (undefined);

    }
    
    const resetScore = () => {
        SetScore(0);
    }

    const SetShowRulesHandler = () =>{
      SetShowRules(!showRules)
    }
    

  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore score={score}/>
          <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
        </div>
        <RollDice currentDice={currentDice} roleDice={roleDice}/>
        <div className="buttons">
          <OutLineButton onClick={resetScore}>Reset Button</OutLineButton>
          <Button onClick={SetShowRulesHandler}>{showRules? "Hide" : "Show"} Rules</Button>
        </div>
        {showRules && <Rules/>}
      </MainContainer>
    </>
  )
}

export default GamePlay