import FotoSobreMim from '../assets/sobreMim.png'
import styled from 'styled-components'

const TerceiraSessaoContainer = styled.section`
    height: 75vh;

    @media (max-width: 768px) {
        height: 150vh;
    }
`

const Conteudo = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 5rem;

    div {
        width: 35%;

        p {
            height: 20vh;
            font-size: 25px;
            display: flex;
            align-items: center;
        }
    }

    img {
        width: 30%;
    }

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 0;
        height: 150vh;

        div {
            width: 95%;

            p {
                font-size: 20px;
                height: 28vh;
            }
        }

        img {
            width: 80%;
        }
    }
`

export default function TerceiraSessao() {
  return (
    <TerceiraSessaoContainer>
        <Conteudo>
            <div>
                <p>Sou uma apaixonada por filmes, séries e livros, sempre buscando novas histórias e aventuras para me inspirar. Adoro mergulhar em diferentes mundos através das páginas de um livro ou das cenas de um filme que eu assisto com a minha mãe.</p>
                <p>Além disso, um dos meus hobbies favoritos é desenhar. Sempre encontro alegria e paz ao expressar minha criatividade no papel, transformando ideias e emoções em traços e cores.</p>
                <p>Além disso, tenho um grande amor por animais e sou a orgulhosa tutora do Théo, meu querido papagaio. Ter um papagaio sempre foi meu sonho, e Théo trouxe muita felicidade e alegria para minha vida.</p>
            </div>
            <img src={FotoSobreMim} alt="Foto minha segurando balde de pipoca dos Vingadores, foto de um desenho que eu fiz do Michael Jackson e foto minha com meu papagaio." />
        </Conteudo>
    </TerceiraSessaoContainer>
  )
}
