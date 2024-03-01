import styled from "styled-components";
import { Card } from 'antd';

export const CardStyled = styled(Card)`
    width:30%;
    position: relative;
    background: #efefef;
    
    & .ant-card-cover {
            overflow: hidden;
            padding: 0;
            max-height: 384px;
    }
    
    & img {
        width: 100%;
        transition: transform .25s linear;
    }
    
    & img:hover {
            transition: transform .25s linear;
            transform: scale(1.05);
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
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #bd4444;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: .15s linear;
    }
    
    & .addBusket:hover {
        background-color: #bc001a;
        transition: .15s linear;
    }
`
