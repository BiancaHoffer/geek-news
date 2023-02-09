import { ContainerMain, ContentImages } from "./styles";
import image from '../../../../assets/the-last-of-us-II.jpg';
import image2 from '../../../../assets/horizon-zero-dawm.webp';
import image3 from '../../../../assets/hogwarts-legacy.webp';
import { NavLink } from "react-router-dom";


export function Main() {
  return (
    <ContainerMain>
      <ContentImages>
        <div>
          <img src={image3} />
          <p>Hogwarts Legacy</p>
        </div>
        <div>
          <img src={image2} />
          <p>Horizon Zero Dawn - Complete edition</p>
        </div>
        <div>
          <img src={image} />
          <p>The Last of Us - PART II</p>
        </div>
      </ContentImages>


      <NavLink to='/posts'>
        Veja mais
      </NavLink>
    </ContainerMain>
  )
}