import styled from "styled-components";

export const CardStyled = styled.div`
    width:30%;
    position: relative;
    background: #efefef;

    
    & div {
        padding: 20px;
    }
    
    & img {
        width: 100%;
    }
    
    & span {
        display: block;
        font-size: 24px;
        font-weight: 700;
        margin: 10px 0;
    }
    
    & .price {
        font-weight: 700;
        color: green;
       margin: 15px 0 0 0;
    }
    
    & .addBusket {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #bd4444;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: .15s linear
    }
    
    & .addBusket:hover {
        background-color: red;
        transition: .15s linear;
    }
`
