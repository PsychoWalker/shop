import React from 'react';
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import { GlobalStyle, Wrapper } from "./style";
import {Main} from "./components/main/main";

interface MainProps {
    productsList: Todo[];
}

export const App: React.FC<MainProps> = ({productsList}: MainProps) => {
    return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Main productsList={productsList}/>
      <Footer />
    </Wrapper>
  );
}

export default App;
