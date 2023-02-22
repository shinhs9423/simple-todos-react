/**
 * 제작 : 한승현
 * 날짜 : 2023/02/20
 * 내용 : Header
 */

import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { HeaderWrapStyled, HeaderAppBarStyled, HeaderAppHeaderStyled, HeaderLogoutButtonStyled } from '../../stylesheets/header/header';
import { TasksCollection } from '../../../api/TasksCollection';
import Button from '../button/Button';
import { Meteor } from 'meteor/meteor';

function Header({ user, title, pendingOnlyFilter }) {
    const pendingTasksCount = useTracker(() => {
        if (user === null) {
            return 0;
        }

        return TasksCollection.find(pendingOnlyFilter).count();
    });

    const pendingTasksTitle = `${
        pendingTasksCount ? (pendingTasksCount) : ''
    }`

    const logOut = () =>  Meteor.logout();

    const { username } = user;

    return (
        <>
            <HeaderWrapStyled>
                <HeaderAppBarStyled>
                    <HeaderAppHeaderStyled>
                        <h1>
                            <span>{title}</span>
                            <span>({pendingTasksTitle})</span>
                        </h1>
                    </HeaderAppHeaderStyled>
                </HeaderAppBarStyled>
            </HeaderWrapStyled>
            <HeaderLogoutButtonStyled onClick={logOut}>{ username } logout</HeaderLogoutButtonStyled>
        </>
    );
}


export default Header;