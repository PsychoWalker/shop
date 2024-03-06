import React, {useState} from 'react';
import {Logo} from "../../ui/logo/logo";
import {HeaderUpperStyled, HeaderMainStyled, NavigationMenu, FaShoppingBasketStyled, ModalBasket} from "./style";

interface Orders {
    orders: Todo[],
    onDelete: (item: Todo) => void;
}

export const Header: React.FC<Orders> = ({orders, onDelete}:Orders) => {
    let [cartActive, setCartActive] = useState(false);

    const showModal = () => {
        setCartActive(true);
    };

    const handleOk = () => {
        setCartActive(false);
    };

    const handleCancel = () => {
        setCartActive(false);
    };

    let summ:number = 0;
    orders.forEach(el => summ += Number.parseFloat(el.price));

    return (
        <header>
        <HeaderUpperStyled>
           <Logo />
            <NavigationMenu>
                <li><FaShoppingBasketStyled onClick={() => {setCartActive(cartActive = !cartActive); showModal()}} className={`${cartActive && 'active'}`}/></li>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </NavigationMenu>
            {cartActive && (
                <ModalBasket title="Корзина" open={cartActive} onOk={handleOk} onCancel={handleCancel}>
                    { orders.length == 0 ? (<p>Ваша Корзина пуста</p>) : (
                        orders.map((order,  index) => (
                            <p className="basketLine" key={index}><span className="basketNumber">{index+1}.</span> <span>{order.title}</span> - <span>{order.price}</span> <span className="basketRemove" onClick={() => {onDelete(order)}}>x</span></p>
                        ))
                    )}
                    <p className="totalPrice">
                       Общая сумма: {summ} золотых.
                    </p>
                </ModalBasket>
            )}
        </HeaderUpperStyled>
        <HeaderMainStyled />
        </header>
    );
};

export default Header;
