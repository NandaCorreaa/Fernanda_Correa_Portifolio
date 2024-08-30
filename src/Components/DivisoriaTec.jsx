import styled from 'styled-components'
import Tecnologias from '../assets/tecnologias.png'

const TecnologiasDiv = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  overflow: hidden;

  img {
    width: 15%;
  }

  @media (max-width: 768px) {

    img {
      width: 50%;
    }
}
`;

export default function DivisoriaTec() {
  return (
    <div>
      <TecnologiasDiv>
          <img src={Tecnologias} alt="Lista de tecnonologias como: Html, Css, JavaScript, ReactJs, Styled-Components, Sass" />
          <img src={Tecnologias} alt="Lista de tecnonologias como: Html, Css, JavaScript, ReactJs, Styled-Components, Sass" />
          <img src={Tecnologias} alt="Lista de tecnonologias como: Html, Css, JavaScript, ReactJs, Styled-Components, Sass" />
          <img src={Tecnologias} alt="Lista de tecnonologias como: Html, Css, JavaScript, ReactJs, Styled-Components, Sass" />
          <img src={Tecnologias} alt="Lista de tecnonologias como: Html, Css, JavaScript, ReactJs, Styled-Components, Sass" />
          <img src={Tecnologias} alt="Lista de tecnonologias como: Html, Css, JavaScript, ReactJs, Styled-Components, Sass" />
          <img src={Tecnologias} alt="Lista de tecnonologias como: Html, Css, JavaScript, ReactJs, Styled-Components, Sass" />
      </TecnologiasDiv>
    </div>
  )
}
