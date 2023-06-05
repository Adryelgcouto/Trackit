import styled from "styled-components";

export const ContentCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  display: none;
  img {
    margin-bottom: 32.62px;
  }
  input {
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    font-size: 19.98px;
    padding-left: 11px;
  }
  input::placeholder {
    color: #d4d4d4;
  }
  button {
    width: 303px;
    height: 45px;
    background-color: #52b6ff;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20.98px;
    margin-bottom: 25px;
  }
  a {
    color: #52b6ff;
  }
`;
