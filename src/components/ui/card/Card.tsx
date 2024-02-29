import React from 'react';
import {CardStyled} from "./style";

interface CardProps {
    idProduct: number,
    urlProduct: string,
    titleProduct: string,
    descProduct: string,
    priceProduct: string
}

export const Card: React.FC<CardProps>
    = ({idProduct, urlProduct, titleProduct, descProduct, priceProduct}: CardProps) => {

    return (
        <>
            <CardStyled>
                <img src={urlProduct}/>
                <div>
                    <span>{titleProduct}</span>
                    <p>{descProduct}</p>
                    <p className="price">Цена: {priceProduct}</p>
                </div>
                <div className="addBusket">+</div>
            </CardStyled>
        </>
    );
};
