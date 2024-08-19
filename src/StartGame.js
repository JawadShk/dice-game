import styled from 'styled-components'
import {Button} from './Styled/Button'

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100vh;

  .content h1{
    font-size: 96px;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

const StartGame = (props) => {
  return (
    <>
      <Container>

        <div>
          <img src="images/dices 1.png" alt="dice" />
        </div>

        <div className='content'>
          <h1>Dice Game</h1>
          <Button onClick={props.toggle}>Play Now</Button>
        </div>

      </Container>
    </>
  )
}

export default StartGame