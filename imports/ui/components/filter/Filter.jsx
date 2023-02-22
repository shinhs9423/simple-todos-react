/**
 * 제작 : 한승현
 * 날짜 : 2023/02/21
 * 내용 : Filter
 */

import React from 'react';
import { FilterWrapStyled, } from '../../stylesheets/filter/filter';
import Button from '../button/Button';

function Filter({ hideCompleted, setHideCompleted }) {

    return (
        <FilterWrapStyled>
            <Button onClickHandler={() => { setHideCompleted(!hideCompleted)} }>
                {hideCompleted ? 'Show All' : 'Hide Completed'}
            </Button>

        </FilterWrapStyled>
    );
}


export default Filter;