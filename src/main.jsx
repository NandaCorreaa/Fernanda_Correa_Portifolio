import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'
import { register } from 'swiper/element/bundle' // função de importação para registrar pacote de elementos personalizados do Swiper
register()
import 'swiper/css'; //importação do css padrão do swiper
import 'swiper/css/navigation' //import dos módulos do swiper (setinha pro lado)
import 'swiper/css/pagination' //import dos módulos do swiper (bolinhas pro lado)
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-fade'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Slab", serif;
    color: #fbf7f7;

    ::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem. Precisa ter, se não, não funciona */
  }

  ::-webkit-scrollbar-track {
    background: #4D1755; /* Cor de fundo */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #b100b4; /* Cor da barrinha de rolagem */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #9a06b1; /* Cor da barra de rolagem ao passar o mouse */
  }
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
