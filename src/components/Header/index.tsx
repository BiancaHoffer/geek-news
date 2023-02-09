import { ContainerHeader, ContentHeader } from "./styles";
import logo from '../../assets/logo.svg'
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={logo} alt="Logo GeekNews" />

        <nav>
          <ActiveLink to="/" name='Home' />
          <ActiveLink to="/posts" name='Posts' />
        </nav>

        <div>
          VISITANTE
        </div>
      </ContentHeader>
    </ContainerHeader>
  )
}