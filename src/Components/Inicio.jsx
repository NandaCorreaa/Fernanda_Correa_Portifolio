import styled from 'styled-components'
import BackgroundPrimeiraSessao from '../assets/backgroundPrimeiraSessao.jpg'
import BackgroundPrimeiraSessaoMobile from '../assets/backgroundPrimeiraSessaoMobile.png'


const InicioContainer = styled.section`
    height: 100vh;
    background-image: url(${BackgroundPrimeiraSessao});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 120px;

    div {
      height: 50vh;
      width: 40%;
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 70px;
        width: 100%;
        font-family: "Courgette", cursive;
        text-shadow: 0 0 5px #ffa500, 0 0 15px #E633FF, 0 0 20px #E633FF, 0 0 40px #E633FF, 0 0 40px #ff0000, 0 0 10px #E633FF, 0 0 60px #E633FF;
      }

      p {
        width: 90%;
        height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: end;
        font-size: 25px;

        span {
          text-shadow: 0 0 4px #ffa500, 0 0 8px #E633FF, 0 0 10px #E633FF, 0 0 20px #E633FF, 0 0 20px #ff0000, 0 0 5px #E633FF, 0 0 40px #E633FF;
        }
      }
    }

    @media (max-width: 768px){
        background-image: url(${BackgroundPrimeiraSessaoMobile});
        background-position: top;
        padding: 0;
        justify-content: start;
        padding-top: 1rem;
        align-items: center;
        height: 84vh;

      div {
        height: 80vh;
        width: 95%;

        h2 {
          font-size: 40px;
        }

        p {
          font-size: 20px;
          height: 18vh;
          width: 100%;
          justify-content: center;
        }
      }
    }
`

export default function Inicio() {
  return (
    <InicioContainer id='inicio'>
      <div>
        <h2>Oii, eu sou a </h2>
        <h2>Fernanda Corrêa!</h2>
        <p>Sou apaixonada por aprender e sempre estou em busca de novas aventuras no mundo da programação.</p>
        <p>Já embarquei em jornadas incríveis com tecnologias como: <span>HTML, CSS, JavaScript, React.js, e Styled-Components.</span></p>
      </div>
    </InicioContainer>
  )
}
