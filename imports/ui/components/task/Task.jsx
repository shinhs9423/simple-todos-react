/**
 * 제작 : 한승현
 * 날짜 : 2023/02/20
 * 내용 : Task
 */

import React, {useState} from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import { TaskWrapStyled, TaskListWrapStyled  } from '../../stylesheets/task/task';
import TaskForm from './TaskForm';
import TaskItems from './TaskItems';
import Filter from '../filter/Filter';

function Task({ user, tasks, hideCompleted, setHideCompleted, hideCompletedFilter }) {
    const toggleChecked = ({ _id, isChecked }) => {
        TasksCollection.update(_id, {
            $set: {
                isChecked: !isChecked,
            }
        })
    }

    const deleteTask = ({ _id }) => TasksCollection.remove(_id);

    return (
        <TaskWrapStyled>
            <TaskForm user={user}/>

            <Filter hideCompleted={hideCompleted} setHideCompleted={setHideCompleted}/>

            <TaskListWrapStyled>
                {
                    tasks.map((task) => {
                        return (
                            <TaskItems
                                key={task._id}
                                task={task}
                                onCheckboxClick={toggleChecked}
                                onClickHandler={deleteTask}
                            />
                        )
                    })
                }
            </TaskListWrapStyled>

        </TaskWrapStyled>
    );
}

export default Task;