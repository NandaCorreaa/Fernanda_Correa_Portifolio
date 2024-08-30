import styled from 'styled-components';
import ProjetosBackground from '../assets/projetosBackground.png';
import ProjetoMario from '../assets/telaMario.png'
import ProjetoTelecine from '../assets/telaTelecine.png'
import ProjetoHarry from '../assets/telaHP.png'
import ProjetoVingadores from '../assets/telaVingadores.png'
import ProjetoCalculadora from '../assets/telaCalculadora.png'
import ProjetoBarbie from '../assets/telaBarbie.png'
import ProjetoGuardioes from '../assets/telaGuardioes.png'
import ProjetoLampada from '../assets/telaLampada.png'
import ProjetoCalculadoraInput from '../assets/telaCalculadoraInput.png'
import ProjetoPanteraNegra from '../assets/telaPanteraNegra.png'
import PortifolioAntigo from '../assets/telaPortifolioAntigo.png'
import Github from '../assets/githubLogo.png'
import { Swiper, SwiperSlide} from "swiper/react"


const ProjetosContainer = styled.section`
  height: 105vh;
  background-image: url(${ProjetosBackground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 4rem;

  .titulo {
    width: 85%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-shadow: 0 0 5px #ffa500, 0 0 10px #E633FF, 0 0 10px #E633FF, 0 0 20px #E633FF, 0 0 40px #ff0000, 0 0 20px #E633FF, 0 0 20px #E633FF;
    padding-bottom: 4rem;

     h3 {
        font-size: 30px;
     }
     h2 {
        font-size: 50px;
        font-family: "Courgette", cursive;
     }
  } 

  @media (max-width: 768px) {
  
    .titulo {
      width: 90%;

      h3 {
          font-size: 25px;
      }
      h2 {
          font-size: 40px;
      }
    }
  } 
`;

const CardProjetos = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: groove #fbf7f7;
  border-radius: 20px;

    img {
      width: 95%;
      border-radius: 10px;

      &:hover {
      transform: scale(102%);
      transition: 250ms;
      background-color: #ff008461;
      box-shadow:0 0 2px #ff00848a, 0 0 30px #ff008463, 0 0 20px #ff00844a;
      }
    }

    h2 {
      text-shadow: 0 0 5px #ffa500, 0 0 20px #E633FF, 0 0 40px #ff0000, 0 0 20px #E633FF;
      font-size: 35px;
      font-family: "Courgette", cursive;
    }

    h3, p{
      font-size: 22px;
    }

    .github {
      width: 4vw;
      border-radius: 100%;

      &:hover {
      transform: scale(108%);
      transition: 250ms;
      background-color: #ff008461;
      box-shadow:0 0 2px #ff00848a, 0 0 30px #ff008463, 0 0 20px #ff00844a;
      }
    }
    a {
      text-align: center;
    }

    .data {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      overflow: hidden;

      img {
        width: 100%;
      }

      h2 {
        font-size: 30px;
      }

      .github {
        width: 12vw;
      }
    }
`
const StyledSwiper = styled(Swiper)`
    width: 100%;
    
    .carrosselMobile {
      display: none;
    }
    
    @media (max-width: 768px) {
      overflow: hidden;
      
      .carrosselDesktop {
        display: none;
      }
      
      .carrosselMobile {
        display: flex;
      }
    }
`

export default function Projetos() {

  const infoProjetos = [
    {
      nomeDoProjeto: "Avengers",
      linkDeploy: "https://avengers-by-fernanda-correa.vercel.app/" ,
      imagemDoProjeto: ProjetoVingadores,
      tecnologias: "ReactJs ✦ Styled-Components",
      linkDoGithub: "https://github.com/NandaCorreaa/Avengers",
      data: "11/06/2024"
    },
    {
      nomeDoProjeto: "TeleCine",
      linkDeploy: "https://tele-cine-project-by-fernanda-correa.vercel.app/" ,
      imagemDoProjeto: ProjetoTelecine ,
      tecnologias: "ReactJs ✦ Styled-Components",
      linkDoGithub: "https://github.com/NandaCorreaa/TeleCine-Project",
      data: "17/04/2024"
    },
    {
      nomeDoProjeto: "Super Mario ✦ Mini Game",
      linkDeploy: "https://nandacorreaa.github.io/SuperMario-MiniGame/" ,
      imagemDoProjeto: ProjetoMario,
      tecnologias: "HTML ✦ CSS ✦ JavaScript",
      linkDoGithub: "https://github.com/NandaCorreaa/SuperMario-MiniGame",
      data: "19/02/2024"
    },
    {
      nomeDoProjeto: "Harry Potter",
      linkDeploy:  "https://harry-potter-by-fernanda-correa.vercel.app/",
      imagemDoProjeto: ProjetoHarry,
      tecnologias: "ReactJs ✦ Styled-Components",
      linkDoGithub: "https://github.com/NandaCorreaa/Harry_Potter",
      data: "12/06/2024"
    },
    {
      nomeDoProjeto: "Calculadora",
      linkDeploy: "https://calculator-fernanda-correa.vercel.app/" ,
      imagemDoProjeto: ProjetoCalculadora,
      tecnologias: "ReactJs ✦ Styled-Components",
      linkDoGithub: "https://github.com/NandaCorreaa/Calculator",
      data: "25/06/2024"
    },
    {
      nomeDoProjeto: "Barbie",
      linkDeploy: "https://nandacorreaa.github.io/BARBIE_Project/" ,
      imagemDoProjeto: ProjetoBarbie,
      tecnologias: "HTML ✦ CSS",
      linkDoGithub: "https://github.com/NandaCorreaa/BARBIE_Project",
      data: "21/07/2023"
    },
    {
      nomeDoProjeto: "Guardiões da Galáxia",
      linkDeploy: "https://nandacorreaa.github.io/Guardians_of_the_Galaxy-Project/" ,
      imagemDoProjeto: ProjetoGuardioes,
      tecnologias: "HTML ✦ CSS",
      linkDoGithub: "https://github.com/NandaCorreaa/Guardians_of_the_Galaxy-Project",
      data: "01/07/2023"
    }, 
    {
      nomeDoProjeto: "Acenda a Lâmpada",
      linkDeploy: "https://nandacorreaa.github.io/Lampada_Project/" ,
      imagemDoProjeto: ProjetoLampada,
      tecnologias: "HTML ✦ CSS ✦ JavaScript",
      linkDoGithub: "https://github.com/NandaCorreaa/Lampada_Project",
      data: "04/06/2024"
    },
    {
      nomeDoProjeto: "Calculadora",
      linkDeploy: "https://calculadora-react-a55n-k1f2dfqlt-fernandas-projects-7fd83f4a.vercel.app/" ,
      imagemDoProjeto: ProjetoCalculadoraInput,
      tecnologias: "ReactJs ✦ Styled-Components",
      linkDoGithub: "https://github.com/NandaCorreaa/Calculadora_React",
      data: "27/10/2023"
    },
    {
      nomeDoProjeto: "Pantera Negra",
      linkDeploy: "https://nandacorreaa.github.io/Pantera_Negra/" ,
      imagemDoProjeto: ProjetoPanteraNegra,
      tecnologias: "HTML ✦ SASS",
      linkDoGithub: "https://github.com/NandaCorreaa/Pantera_Negra",
      data: "17/07/2024"
    },
    {
      nomeDoProjeto: "Portifólio Antigo",
      linkDeploy: "https://portifolio-fernanda-correa.vercel.app/" ,
      imagemDoProjeto: PortifolioAntigo,
      tecnologias: "ReactJs ✦ Styled-Components",
      linkDoGithub: "https://github.com/NandaCorreaa/Portifolio_FernandaCorrea",
      data: "04/12/2023"
    },
    // {
    //   nomeDoProjeto: "",
    //   linkDeploy: "" ,
    //   imagemDoProjeto: ,
    //   tecnologias: "ReactJs ✦ Styled-Components",
    //   linkDoGithub: "",
    //   data: ""
    // },
]

  return (
    <ProjetosContainer id='projetos'>
      <div className='titulo'>
        <h3>Alguns dos</h3>
        <h2>Meus projetos favoritos</h2>
      </div>
      {/* CARROSSEL PARA O DESKTOP */}
      <StyledSwiper className='carrosselDesktop'
            navigation 
            effect='coverflow'
            coverflowEffect={{rotate: 2,
              slideShadows: false}}
            spaceBetween={80}
            slidesPerView={3} 
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            >
                  {infoProjetos.map((item)=>(
                        <SwiperSlide className='carrosselDesktop'>
                            <CardProjetos>
                              <a target='_blank' href={item.linkDeploy}><img src={item.imagemDoProjeto} alt="Captura de tela do projeto" /></a>
                              <h2>{item.nomeDoProjeto}</h2>
                              <h3>Tecnologias:</h3>
                              <p>{item.tecnologias}</p>
                              <a target='_blank' href={item.linkDoGithub}><img className='github' src={Github} alt="Ícone do Github" /></a>
                              <p className='data'>Desenvolvido em: {item.data}</p>
                            </CardProjetos>
                        </SwiperSlide>
                  ))}
      </StyledSwiper>
      {/* CARROSSEL PARA O MOBILE */}
      <StyledSwiper
            navigation 
            effect='coverflow'
            coverflowEffect={{rotate: 2,
              slideShadows: true}}
            spaceBetween={80}
            slidesPerView={1} 
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            >
                  {infoProjetos.map((item)=>(
                        <SwiperSlide className='carrosselMobile'>
                            <CardProjetos>
                              <a target='_blank' href={item.linkDeploy}><img src={item.imagemDoProjeto} alt="Captura de tela do projeto" /></a>
                              <h2>{item.nomeDoProjeto}</h2>
                              <h3>Tecnologias:</h3>
                              <p>{item.tecnologias}</p>
                              <a target='_blank' href={item.linkDoGithub}><img className='github' src={Github} alt="Ícone do Github" /></a>
                              <p className='data'>Desenvolvido em: {item.data}</p>
                            </CardProjetos>
                        </SwiperSlide>
                  ))}
      </StyledSwiper>
    </ProjetosContainer>
  );
}