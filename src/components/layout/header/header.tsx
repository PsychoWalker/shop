import React, {useState} from 'react';
import {Logo} from "../../ui/logo/logo";
import {HeaderUpperStyled, HeaderMainStyled, NavigationMenu, FaShoppingBasketStyled} from "./style";
import { Modal } from 'antd';
import { FaShoppingBasket } from "react-icons/fa";

function Header() {
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
                <Modal title="Basic Modal" open={cartActive} onOk={handleOk} onCancel={handleCancel}>

                </Modal>
            )}
        </HeaderUpperStyled>
        <HeaderMainStyled />
        </header>
    );
}

export default Header;
