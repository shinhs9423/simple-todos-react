import styled from 'styled-components';

const TaskWrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  background: white;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: inherit;
  }
`

const TaskListWrapStyled = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  padding-left: 16px;
  padding-right: 16px;
  margin-block-start: 0;
  margin-block-end: 0;
`

export {
    TaskWrapStyled,
    TaskListWrapStyled,
};