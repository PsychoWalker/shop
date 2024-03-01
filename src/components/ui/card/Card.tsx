import React from 'react';
import {CardStyled} from "./style";
import { Card } from 'antd';

interface CardProps {
    idProduct: number,
    urlProduct: string,
    titleProduct: string,
    descProduct: string,
    priceProduct: string
}

const { Meta } = Card;

export const CardProduct: React.FC<CardProps>
    = ({idProduct, urlProduct, titleProduct, descProduct, priceProduct}: CardProps) => {

    return (
        <>
            <CardStyled
                hoverable
                cover={<img alt={titleProduct} src={urlProduct} />}
            >
                <Meta title={titleProduct} description={descProduct} />
                <p className="price">Цена: {priceProduct}</p>
                <div className="addBusket">+</div>
            </CardStyled>
        </>
    );
};
