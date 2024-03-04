import React from 'react';
import {CardStyled} from "./style";
import { Card } from 'antd';

interface CardProps {
    idProduct: number,
    urlProduct: string,
    titleProduct: string,
    descProduct: string,
    priceProduct: string,
    getProduct: Todo,
    added: (item: Todo) => void;
}

const { Meta } = Card;

export const CardProduct: React.FC<CardProps>
    = ({ getProduct, idProduct, urlProduct, titleProduct, descProduct, priceProduct, added}: CardProps) => {
    return (
        <>
            <CardStyled
                hoverable
                cover={<img alt={titleProduct} src={urlProduct} />}
            >
                <Meta title={titleProduct} description={descProduct} />
                <p className="price">Цена: {priceProduct}</p>
                <div className="addBusket" onClick={() => added(getProduct)}>+</div>
            </CardStyled>
        </>
    );
};
