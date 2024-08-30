import styled from 'styled-components'
import FotoFernanda from '../assets/fotoDePerfil.png'
import Github from '../assets/githubLogo.png'
import Instagram from '../assets/instagramLogo.png'
import Linkedin from '../assets/linkedinLogo.png'


const SegundaSessaoContainer = styled.section`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 110vh;
        justify-content: space-evenly;
    }
`

const SobreMimContainer = styled.section`
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        flex-direction: column;
        height: 110vh;
    }
`

const CardRedes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
        width: 45%;
    }

    @media (max-width: 768px) {
        height: 45vh;

        img {
            width: 50%;
        }
    }
`

const Nav = styled.nav`
    display:flex;
    justify-content: space-between;
    width: 12vw;

    img {
        width: 3.5vw;
        border-radius: 100%;

    &:hover {
        transform: scale(108%);
        transition: 250ms;
        background-color: #ff008461;
        box-shadow:0 0 2px #ff00848a, 0 0 30px #ff008463, 0 0 20px #ff00844a;
    }
    }

    @media (max-width: 768px) {
        width: 50%;

        img {
            width: 12.5vw;
        }
    }
`

const SobreMim = styled.div`
    width: 40%;
    
    .titulo {
     height: 20vh;
     display: flex;
     flex-direction: column;
     justify-content: center;
     text-shadow: 0 0 5px #ffa500, 0 0 10px #E633FF, 0 0 10px #E633FF, 0 0 20px #E633FF, 0 0 40px #ff0000, 0 0 20px #E633FF, 0 0 20px #E633FF;

     h3 {
        font-size: 30px;
     }
     h2 {
        font-size: 50px;
        font-family: "Courgette", cursive;
     }
    }

    .texto {
        height: 35vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        p {
            width: 80%;
            font-size: 25px;
        }
    }

    @media (max-width: 768px) {
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .titulo {
            width: 90%;

            h3 {
                font-size: 25px;
            }
            h2 {
                font-size: 40px;
            }
        }

        .texto {
            align-items: center;

            p {
                width: 95%;
                font-size: 20px;
            }
        }
    }
`

export default function SegundaSessao() {
  return (
    <SegundaSessaoContainer id="sobre">
      <SobreMimContainer>
            <CardRedes>
                <img src={FotoFernanda} alt="Foto minha sorrindo" />
                <Nav>
                    <a href="https://github.com/NandaCorreaa" target="_blank"> <img src={Github} alt="Ícone do Github" /> </a>
                    <a href="https://www.linkedin.com/in/fernanda-corr%C3%AAa-477926275/" target="_blank" > <img src={Linkedin} alt="Ícone do LinkedIn" /></a>
                    <a href="https://www.instagram.com/__nandacorrea/" target="_blank" > <img src={Instagram} alt="Ícone do Instagram" /></a>
                </Nav>
            </CardRedes>
            <SobreMim>
                <div className='titulo'>
                    <h3>um pouquinho</h3>
                    <h2>Sobre Mim</h2>
                </div>
                <div className='texto'>
                    <p>Apaixonada por programação, apesar da minha formação inicial ter sido como professora, minha paixão pela programação despertou no início de 2023, tornando-me uma constante aprendiz.</p>
                    <p>Tenho uma habilidade natural para comunicação e estou empolgada para expandir meus horizontes, buscando sempre crescer nesta jornada.</p>
                </div>
            </SobreMim>
      </SobreMimContainer>
    </SegundaSessaoContainer>
  )
}