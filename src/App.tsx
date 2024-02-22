import React from 'react';
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import { GlobalStyle, Wrapper } from "./style";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header></Header>
      <Footer></Footer>
    </Wrapper>
  );
}

export default App;
