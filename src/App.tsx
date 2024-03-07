import React, {useEffect, useState} from 'react';
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import { GlobalStyle, Wrapper } from "./style";
import {Main} from "./components/main/main";

interface MainProps {
    productsList: Todo[];
}

export const App: React.FC<MainProps> = ({productsList}: MainProps) => {
    const [orders, setOrders] = useState<Todo[]>([]);
    const [filters, setFilters] = useState<Todo[]>(productsList);

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

    const filterHandler = (categories: string) => {
        categories === 'all' ? setFilters(productsList) : setFilters(productsList.filter(el => el.category === categories));
    }

   /* useEffect(() => {
        console.log(orders)
    }, [orders]) */

    return (
    <Wrapper>
      <GlobalStyle />
      <Header orders={orders} onDelete={deleteOrder}/>
      <Main productsList={filters} onAdd={addToOrder} onFilter={filterHandler}/>
      <Footer />
    </Wrapper>
  );
}

export default App;
