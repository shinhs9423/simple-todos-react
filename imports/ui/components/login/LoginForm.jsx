/**
 * 제작 : 한승현
 * 날짜 : 2023/02/21
 * 내용 : LoginForm
 */

import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { LoginFormWrapStyled, LoginFormContentsWrapStyled } from '../../stylesheets/login/loginForm';
import LoginFormInput from './LoginFormInput';
import Button from '../button/Button';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginSubmit = (e) => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password);
    }


    return (
        <LoginFormWrapStyled onSubmit={loginSubmit}>
            <LoginFormContentsWrapStyled>
                <LoginFormInput type='text' setState={setUsername}>UserName</LoginFormInput>
            </LoginFormContentsWrapStyled>

            <LoginFormContentsWrapStyled>
                <LoginFormInput type='password' setState={setPassword}>Password</LoginFormInput>
            </LoginFormContentsWrapStyled>

            <LoginFormContentsWrapStyled>
                <Button type='submit'>Log In</Button>
            </LoginFormContentsWrapStyled>
        </LoginFormWrapStyled>
    );
}

export default LoginForm;