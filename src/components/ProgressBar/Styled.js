import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  display: flex;
`;

const grow = keyframes`
  from {
    width: 0
  }

  to {
    width: 120px;
  }
`;

const circle = keyframes`
  from {
    background-color: lightgray;
    border-color: grey;
  }

  to {
background-color: rgb(40, 207, 207);
border-color: rgb(248, 168, 21);
    
  }
`;

/* const styles = css`
  animation: ${grow} 2s linear infinite;
`*/

export const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Bar = styled.div`
  width: 120px;
  height: 5px;
  background-color: lightgray;
  /*background-color: ${({ completed }) =>
    completed ? "rgb(248, 168, 21)" : "lightgray"};}
  */
    &:before {
      content: "";
      width: ${({ completed }) => (completed ? "120px" : "0")};
      height: 5px;
      background-color: rgb(248, 168, 21);
      position: absolute;
      left: 0; 
      animation-name: ${({ completed }) => (completed ? grow : "none")};
  animation-duration: ${({ completed }) => (completed ? "1s" : "0")};
  animation-timing-function: linear;
    }
`;

export const Circle = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${({ completed }) =>
    completed ? "rgb(40, 207, 207)" : "grey"};
  border: 3px solid;
  border-color: ${({ completed }) =>
    completed ? "rgb(248, 168, 21)" : "lightgray"};
  animation-name: ${({ completed }) => (completed ? circle : "none")};
  animation-duration: ${({ completed, delay }) =>
    completed && delay ? "1s" : "0"};
  animation-timing-function: linear;
  animation-delay: 1s

  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
