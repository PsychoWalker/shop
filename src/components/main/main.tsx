import React from 'react';
import {CardProduct} from '../ui/card/Card'
import {MainStyled} from "./style";

interface MainProps {
    productsList: Todo[];
    onAdd: (item: Todo) => void;
}

export const Main:React.FC<MainProps> = ({productsList, onAdd}: MainProps) => {

    return (
        <MainStyled>
            <section className="products">
                {productsList.map((products) => {
                    return <CardProduct key={products.id} descProduct={products.desc} urlProduct={products.img} idProduct={products.id} titleProduct={products.title} priceProduct={products.price} getProduct={products} added={onAdd}/>
                })}
            </section>
        </MainStyled>
    );
};
