import Header from "./Components/Header";
import Main from "./Components/Main";
import styled from "styled-components";

const AppContainer = styled.section`
  /* background: rgb(89,0,107);
  background: linear-gradient(137deg, rgba(89,0,107,1) 0%, rgba(74,0,89,1) 50%, rgba(11,0,56,1) 100%); */
  background: rgb(13,13,13);
background: radial-gradient(circle, rgba(13,13,13,1) 0%, rgba(36,4,51,1) 80%, rgba(36,4,51,1) 100%);
`

export default function App() {
  return (
    <AppContainer>
      <Header/>

      <Main/>
    </AppContainer>
  )
}
