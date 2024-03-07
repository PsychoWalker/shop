import React from 'react';
import {FilterItem, FilterStyle} from "./style";

interface GetCategory {
    productsList: Todo[],
    onFilter: (item:string) => void;
}

let categoryArray: string[] = [];

export const Filter: React.FC<GetCategory> = ({productsList, onFilter}: GetCategory) => {
    return (
        <>
            {
                productsList.map((element, index) => {
                    {
                        if (!categoryArray.includes(element.category)) {
                           categoryArray.push(element.category);
                        }
                    }
                })
            }
            <FilterStyle>
                    <FilterItem className="category" onClick={() => onFilter("all")} key={0}>Все</FilterItem>

                {
                    categoryArray.map((el, index) => (
                        <FilterItem className="category" onClick={() => onFilter(el)} key={index+1}>{el}</FilterItem>
                    ))
                }
            </FilterStyle>



        </>
    );
};
