import styled from "styled-components";

export const ContentLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  display: none;


  input{
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 6px;
    font-size: 19.98px;
    padding-left: 11px;
 

  }
  input::placeholder{
      color: #D4D4D4;
    }
  img{
    margin-bottom: 32.62px;
  }
  button{
    border: none;
    width: 303px;
    height: 45px;
    color: white;
    background-color: #52B6FF;
    border-radius: 5px;
    margin-bottom: 25px;
    font-size: 20.98px;
  }
  a{
     color: #52B6FF;
     font-size: 13.98px;
  }

`