import styled from 'styled-components'
import Github from '../assets/githubLogo.png'
import Instagram from '../assets/instagramLogo.png'
import Linkedin from '../assets/linkedinLogo.png'

const FooterContainer = styled.footer`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #040404;

    h2 {
        width: 60%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: 20vh;
        
        h2 {
            width: 100%;
            text-align: center;
            font-size: 16px;
        }
    }
`

const CardRedes = styled.div`
    width: 40%;
    display: flex;
    align-items: start;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`

const Nav = styled.nav`
    display:flex;
    justify-content: space-evenly;
    width: 30%;
    margin-left: 4rem;

    img {
    width: 2vw;
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
        margin: 0;

        img {
            width: 10vw;
        }
    }
`

export default function Footer() {
  return (
    <FooterContainer>
        <CardRedes>
            <Nav>
                <a href="https://github.com/NandaCorreaa" target="_blank"> <img src={Github} alt="Ícone do Github" /> </a>
                <a href="https://www.linkedin.com/in/fernanda-corr%C3%AAa-477926275/" target="_blank" > <img src={Linkedin} alt="Ícone do LinkedIn" /></a>
                <a href="https://www.instagram.com/__nandacorrea/" target="_blank" > <img src={Instagram} alt="Ícone do Instagram" /></a>
            </Nav>
        </CardRedes>
            <h2>Desenvolvido por Fernanda Corrêa</h2>
    </FooterContainer>
  )
}
