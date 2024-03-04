import React, {useEffect, useState} from 'react';
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import { GlobalStyle, Wrapper } from "./style";
import {Main} from "./components/main/main";
import {isInt8Array} from "util/types";

interface MainProps {
    productsList: Todo[];
}

export const App: React.FC<MainProps> = ({productsList}: MainProps) => {
    const [orders, setOrders] = useState<Todo[]>([]);

    const addToOrder = (item: Todo) => {
        let isInArray = false;
        orders.forEach(el => {
            el.id === item.id && (isInArray = true)
        });

        !isInArray && (setOrders([...orders, item]));
    }

    const deleteOrder = (id: Todo) => {
        setOrders(orders.filter(p => p.id !== id.id));
    }

   /* useEffect(() => {
        console.log(orders)
    }, [orders]) */

    return (
    <Wrapper>
      <GlobalStyle />
      <Header orders={orders} onDelete={deleteOrder}/>
      <Main productsList={productsList} onAdd={addToOrder}/>
      <Footer />
    </Wrapper>
  );
}

export default App;
