// import { useState } from "react";
import styled from "styled-components"

const DiceContainer = styled.div`

  margin-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice{
    cursor: pointer;
  }

  p{
    font-size: 24px;
    font-weight: 700;
  }

`;

const RollDice = ({roleDice, currentDice}) => {

  return (
    <DiceContainer>
      <div className="dice">
        <img src={`images/dice_${currentDice}.png`} alt="dice 1" onClick={roleDice}/>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice