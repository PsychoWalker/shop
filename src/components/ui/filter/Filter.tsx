import React from 'react';
import {FilterItem} from "./style";

interface GetCategory {
    productsList: Todo[],
}

let categoryArray: string[] = [];

export const Filter: React.FC<GetCategory> = ({productsList}: GetCategory) => {
    return (
        <>
            {
                productsList.map((element) => {
                    if(!categoryArray.includes(element.category)) {
                        categoryArray.push(element.category);
                        (
                            <FilterItem className="category">{element.category}</FilterItem>
                        )
                    }

                })

            }

        </>
    );
};
