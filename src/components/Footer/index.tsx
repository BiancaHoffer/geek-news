import { ContainerFooter, ContentFooter } from "./styles";
import logo from '../../assets/logo.svg'

export function Footer() {
  return (
    <ContainerFooter>
      <ContentFooter>
        <div>
          <img src={logo} alt="Logo GeekNews" />
          <a href="">Área admin</a>
        </div>

        <div>
          <h2>Receba novidades todas as semanas!</h2>
          <form action="">
            <label>Assine nossa newsletter:</label>
            <input type="email" placeholder="E-mail" />
            <button>Enviar</button>
          </form>
        </div>
      </ContentFooter>
    </ContainerFooter>

  )
}