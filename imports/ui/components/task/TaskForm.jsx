/**
 * 제작 : 한승현
 * 날짜 : 2023/02/19
 * 내용 : TaskForm
 */

import React, { useState } from 'react';
import { TasksCollection } from '../../../api/TasksCollection';
import { TaskFormStyled } from '../../stylesheets/task/taskForm';
import Button from '../button/Button';
function TaskForm({ user }) {
    const [ text, setText ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!text) {
            return;
        }

        TasksCollection.insert({
            text: text.trim(),
            createAt: new Date(),
            userId: user._id,
        });

        setText('');
    }

    return (
        <TaskFormStyled onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='type to add new tasks'
                value={text}
                onChange={(event) => setText(event.target.value)}
            />

            <Button type='submit'>Add Task</Button>
        </TaskFormStyled>
    );
}

export default TaskForm;