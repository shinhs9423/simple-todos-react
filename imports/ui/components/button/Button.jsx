/**
 * 제작 : 한승현
 * 날짜 : 2023/02/20
 * 내용 : Button
 */

import React from 'react';
import { ButtonStyled } from '../../stylesheets/button/button';

function Button({ onClickHandler, task, children, type }) {
    return (
        <ButtonStyled
            type={type ? type : null}
            onClick={ onClickHandler ? () => onClickHandler(task) : null }
        >
            { children ? children : '' }
        </ButtonStyled>
    );
}
export default Button;