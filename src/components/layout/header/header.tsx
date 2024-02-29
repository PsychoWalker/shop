import React from 'react';
import {Logo} from "../../ui/logo/logo";
import {HeaderUpperStyled, HeaderMainStyled, NavigationMenu} from "./style";

function Header() {
    return (
        <header>
        <HeaderUpperStyled>
           <Logo />
            <NavigationMenu>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </NavigationMenu>
        </HeaderUpperStyled>
        <HeaderMainStyled />
        </header>
    );
}

export default Header;
