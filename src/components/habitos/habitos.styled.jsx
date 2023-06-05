import styled from "styled-components";

export const ContentHabitos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  header {
    h1 {
      font-family: "Playball", cursive;
      font-size: 38.98px;
      color: white;
    }
    background-color: #126ba5;
    width: 100vw;
    height: 70px;
    padding: 0px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    img {
      width: 51px;
      height: 51px;
      border-radius: 98.5px;
    }
  }
  main {
    background-color: #f2f2f2;
    width: 100%;
    height: 100vh;
    & div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 28px 18px 26px 18px;
      h2 {
        font-size: 22.98px;
        color: #126ba5;
      }
      button {
        width: 40px;
        height: 35px;
        background-color: #52b6ff;
        border: none;
        border-radius: 5px;
      }
      p {
        width: 338px;
        height: 74px;
      }
    }
  }
  footer {
    position: fixed;
    background-color: white;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    width: 100vw;
    & div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      & div {
        width: 100%;
        display: flex;
        left: 50%;
        justify-content: center;
        position: absolute;
        align-items: center;
        bottom: 20px;
        width: 91px;
        height: 91px;
      }
    
    }
  }
`;












