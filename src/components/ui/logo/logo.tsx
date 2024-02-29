import * as React from 'react';
import { LogoStyled } from "./style";
import logoImage from "../../../assets/img/woodhlogo.png";

export function Logo() {
    return (
        <LogoStyled>
            <img src={logoImage} width={50} height={50} alt="logo"/> Dream houses
        </LogoStyled>
    );
};
