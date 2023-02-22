/**
 * 제작 : 한승현
 * 날짜 : 2023/02/21
 * 내용 : LoginFormInput
 */

import React from 'react';

function LoginFormInput({ children, setState, type }) {
    const onChange = (e) => {
        setState(e.target.value);
    }
    return (
        <>
            <label
                htmlFor={children.toLowerCase()}
            >
                {children}
            </label>

            <input
                type={type}
                required
                placeholder={children}
                name={children.toLowerCase()}
                onChange={onChange}
            />
        </>
    );
}

export default LoginFormInput;