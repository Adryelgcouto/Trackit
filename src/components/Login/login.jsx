import Logo from "../../assets/logo.svg"
import { ContentLogin } from "./login.styled"
export function Login(){
  return(
    <ContentLogin>
      <img src={Logo} alt="" />
      <input type="text" placeholder="Email"/>
      <input type="password" placeholder="Senha" />
      <button>Entrar</button>
      <a href="">Não tem uma conta? Cadastre-se</a>
    </ContentLogin>
  )
}