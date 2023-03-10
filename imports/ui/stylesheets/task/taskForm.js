import styled from 'styled-components';

const TaskFormStyled = styled.form`
  display: flex;
  margin: 16px;
  
  & > input {
    flex-grow: 1;
    box-sizing: border-box;
    padding: 10px 6px;
    background: transparent;
    border: 1px solid #aaa;
    width: 100%;
    font-size: 1em;
    margin-right: 16px;
  }
  
  & > input:focus {
    outline: 0;
  }
  
  & > button {
    min-width: 100px;
    height: 95%;
    background-color: #315481;
  }
`

export {
    TaskFormStyled,
};