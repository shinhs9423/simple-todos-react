import styled from 'styled-components';

const ButtonStyled = styled.button`
  font-weight: bold;
  font-size: 1em;
  border: none;
  color: #fff;
  box-shadow: 0 3px 3px rgba(34, 25, 25, 0.4);
  padding: 5px;
  cursor: pointer;
  
  :focus {
    outline: 0;
  }
`

export {
    ButtonStyled,
};