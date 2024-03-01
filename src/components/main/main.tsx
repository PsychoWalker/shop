import React from 'react';
import {CardProduct} from '../ui/card/Card'
import {MainStyled} from "./style";

interface MainProps {
    productsList: Todo[];
}

export const Main:React.FC<MainProps> = ({productsList}: MainProps) => {
    console.log(productsList);
    return (
        <MainStyled>
            <section className="products">
                {productsList.map((products) => {
                    return <CardProduct key={products.id} idProduct={products.id} urlProduct={products.img} titleProduct={products.title} descProduct={products.desc} priceProduct={products.price}/>
                })}
            </section>
        </MainStyled>
    );
};
