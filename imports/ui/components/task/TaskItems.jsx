/**
 * 제작 : 한승현
 * 날짜 : 2023/02/19
 * 내용 : Task
 */

import React from 'react';
import Button from '../button/Button';
import { TaskItemsWrapStyled } from '../../stylesheets/task/taskItems';

function TaskItems({ task, onCheckboxClick, onClickHandler }) {
    return (
        <TaskItemsWrapStyled>
            <input
                readOnly
                type='checkbox'
                checked={!!task.isChecked}
                onClick={() => onCheckboxClick(task)}
            />
            <span>
                {task.text}
            </span>
            <Button task={task} onClickHandler={onClickHandler}>&times;</Button>
        </TaskItemsWrapStyled>
    );
}


export default TaskItems;