import styled from "styled-components";
import mainBG from '../../../assets/img/main-ground.jpg';

export const HeaderUpperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`

export const HeaderMainStyled = styled.div`
    margin-bottom: 40px;
    background: url(${mainBG}) no-repeat;
    background-position: center center;
    width: 100%;
    background-size: cover;
    height: 500px;
    position: relative;
    
    &::before {
        position: absolute;
        content: 'Дом твоей мечты';
       max-width: 250px;
       left: 20px;
       top: calc(50% - 50px);
       color: #efefef;
       font-size: 40px;
       text-shadow: 0 0 10px #1c1c1c;
    }
    
    &::after {
       position: absolute;
       content: 'Каждый день как в сказке';
       left: 20px;
       top: calc(50% + 75px);
       color: #efefef;
       font-size: 15px;
       text-shadow: 0 0 10px #1c1c1c;
    }
`

export const NavigationMenu = styled.ul`
    display: flex;
    gap: 40px;
    
    & li {
        list-style-type: none;
        cursor: pointer;
    }
    `
