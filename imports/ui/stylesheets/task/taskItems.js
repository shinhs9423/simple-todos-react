import styled from 'styled-components';

const TaskItemsWrapStyled = styled.li`
  display: flex;
  padding: 16px;
  border-bottom: #eee solid 1px;
  
  & > span {
    flex-grow: 1;
  }
  
  & > button {
    justify-self: flex-end;
    background-color: #ff3046;
    font-weight: bold;
    font-size: 1em;
    border: none;
    color: white;
    box-shadow: 0 3px 3px rgba(34, 25, 25, 0.4);
    padding: 5px;
    cursor: pointer;

    :focus {
      outline: 0;
    }
  }
`

export {
    TaskItemsWrapStyled,
};