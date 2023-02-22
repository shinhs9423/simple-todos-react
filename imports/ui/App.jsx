import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';
// import Header from '/imports/ui/components/header/Header';
// import Task from '/imports/ui/components/task/Task';
import Header from './components/header/Header';
import Task from './components/task/Task';
import LoginForm from './components/login/LoginForm';
import { AppWrapStyled } from './stylesheets/app';
import {TasksCollection} from '../api/TasksCollection';
export const App = () => {
    const user = useTracker(() => Meteor.user());

    const [hideCompleted, setHideCompleted] = useState(false);

    // 필터 생성
    const hideCompletedFilter = { isChecked: { $ne: true }};
    const userFilter = user ? { userId: user._id } : {};
    // 필터 병합
    const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

    const tasks = useTracker(() => {
        if (!user) {
            return [];
        }

        return TasksCollection.find(
            hideCompleted ? pendingOnlyFilter : userFilter,
            {sort: {createAt: -1}}
        ).fetch();

    });

    return (
        <AppWrapStyled>
            {user ? (
                <>
                    <Header title='To do List' pendingOnlyFilter={pendingOnlyFilter} user={user}/>
                    <Task user={user} tasks={tasks} hideCompleted={hideCompleted} setHideCompleted={setHideCompleted} hideCompletedFilter={hideCompletedFilter}/>
                </>
            ) : (
                <LoginForm />
            )}
        </AppWrapStyled>
    );
};
