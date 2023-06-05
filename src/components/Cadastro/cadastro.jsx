import { ContentCadastro } from "./cadastro.styled"
import Logo from "../../assets/logo.svg"
export function Cadastro(){
  return(
    <ContentCadastro>
      <img src={Logo} alt="" />
      <input type="text" placeholder="email"/>
      <input type="text" placeholder="senha" />
      <input type="text"  placeholder="nome"/>
      <input type="text" placeholder="foto" />
      <button>Cadastrar</button>
      <a href="">Já tem uma conta? Faça login!</a>
    </ContentCadastro>
  )
}