import styled from "styled-components"
import { useState } from "react"

// const HeaderContainer = styled.header`
//     height: 12vh;
//     background-color: transparent;
//     backdrop-filter: blur(10px);
//     color: #000;
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
//     position: fixed;
//     width: 100%;
//     color: #fbf7f7;
//     font-family: "Roboto Slab", serif;
// `

// const TituloFernanda = styled.a`
//         font-size: 40px;
//         font-weight: 600;
//         font-family: "Courgette", cursive;
//         text-decoration: none;

//         &:hover {
//             transform: scale(105%);
//             transition: 300ms;
//         }
// `
// const Nav = styled.nav`
//     display: flex;
//     width: 65%;
// `

// const Ul = styled.ul`
//     display: flex;
//     justify-content: space-between;
//     width: 30vw;
// `
// const Ancora = styled.a`
//     color: #000;
//     text-decoration: none;
//     font-size: 1.3rem;
//     color: #fbf7f7;

//     &:hover {
//         transform: scale(108%);
//         transition: 300ms;
//         text-shadow: 0 0 5px #ffa500, 0 0 15px #E633FF, 0 0 20px #E633FF, 0 0 40px #E633FF, 0 0 40px #ff0000, 0 0 10px #E633FF, 0 0 60px #E633FF;
//     }
// `

const HeaderContainer = styled.header`
     height: 12vh;
     width: 100%;
     background-color: transparent;
     backdrop-filter: blur(10px);
     display: flex;
     align-items: center;
     justify-content: start;
     position: fixed;
     width: 100%;
     color: #fbf7f7;
     font-family: "Roboto Slab", serif;

@media (min-width: 320px) and (max-width: 768px){
  height: 16vh;
  justify-content: flex-start;
  position: relative;
}
`
const NavHeader = styled.nav`
    display: flex;
    width: 65%;

    @media (max-width: 768px){
            display: none;     
    }
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 30vw;

    @media (max-width: 768px){
        margin-top: 2rem;
        height: 30vh;
        width: 90%;
        flex-direction: column;
    }
`
const Ancora = styled.a`
    text-decoration: none;
    font-size: 1.3rem;
    color: #fbf7f7;

    &:hover {
        transform: scale(108%);
        transition: 300ms;
        text-shadow: 0 0 5px #ffa500, 0 0 15px #E633FF, 0 0 20px #E633FF, 0 0 40px #E633FF, 0 0 40px #ff0000, 0 0 10px #E633FF, 0 0 60px #E633FF;
    }
`

const TituloFernanda = styled.a`
        font-size: 40px;
        font-weight: 600;
        font-family: "Courgette", cursive;
        text-decoration: none;

        &:hover {
            transform: scale(105%);
            transition: 300ms;
        }
`

const DivHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

img{
    width: 122px;
}


`
// const NavHeader = styled.nav`
//     display: flex;
//     justify-content: space-between;
//     width: 25vw;

//     ul {
//         display: flex;
//         list-style: none;
//         padding: 0;
//         margin: 0;
    
//     li {
//         margin-right: 20px;
//         }
//     }
//     a {
//         text-decoration: none;
//         color: rgb(255, 255, 255);
//     }
   
//     @media (max-width: 768px){
//             display: none;     
//     }
// `

const NavMenu = styled.nav`
  position: absolute;
  background-color: #230632e2;
  width: 90%;
  top: 15vh;
  height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  /* ul{
    height: 40vh;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    li{
        width: 100%;
        border-bottom: solid 1px #b8b8bc42;
        padding-bottom: 10px;

    }

    a{
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
    }
  } */
`



const ButtonMenu = styled.button`
   display: none;

    @media (max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 35px;
    width: 40px;
    color: #fff;
    background-color: transparent;
    border: none;
    }
`

export default function Header() {

    const [abrirMenu, setAbrirMenu] = useState(false);

    const [menuAberto, setMenuAberto] = useState(false);

    function alternarMenu() {
        setAbrirMenu(!abrirMenu);
        setMenuAberto(!menuAberto);
    }

  return (
    <HeaderContainer>
            <div> {/*RESPONSIVO */}
                <ButtonMenu  onClick={alternarMenu} >{abrirMenu ? "✖" : "☰"}</ButtonMenu>
                {menuAberto && 
                (<NavMenu>
                    <Ul>
                            <Ancora href="#inicio">INÍCIO</Ancora>
                            <Ancora href="#sobre">SOBRE</Ancora>
                            <Ancora href="#projetos">PROJETOS</Ancora>
                    </Ul>
                </NavMenu>)}
            </div>

            <DivHeader> {/*DESKTOP */}
                <TituloFernanda href="#inicio">Fernanda Corrêa</TituloFernanda>
            <NavHeader>
                    <Ul>
                        
                            <Ancora href="#inicio">INÍCIO</Ancora>
                            <Ancora href="#sobre">SOBRE</Ancora>
                            <Ancora href="#projetos">PROJETOS</Ancora>
                        
                    </Ul>
             </NavHeader>
           </DivHeader>
        </HeaderContainer>

    // <HeaderContainer>
    //    <TituloFernanda href="#inicio">Fernanda Corrêa</TituloFernanda>
    //         <Nav >
    //             <Ul>
    //                 <Ancora href="#inicio">INÍCIO</Ancora>
    //                 <Ancora href="#sobre">SOBRE</Ancora>
    //                 <Ancora href="#projetos">PROJETOS</Ancora>
    //             </Ul>
    //         </Nav>
    // </HeaderContainer>
  )
}
