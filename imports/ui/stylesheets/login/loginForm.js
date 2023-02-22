import styled from 'styled-components';

const LoginFormWrapStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: center;
  align-items: center;
`

const LoginFormContentsWrapStyled = styled.div`
  margin: 8px;
  
  & > button {
    background-color: #62807e;
    padding: 5px 10px;
  }
  
  & > label {
    font-weight: bold;
  }
  
  & > input {
    flex-grow: 1;
    box-sizing: border-box;
    padding: 10px 6px;
    background: transparent;
    border: 1px solid #aaa;
    width: 100%;
    font-size: 1em;
    margin-right: 16px;
    margin-top: 4px;
    color: #fff;
    
    &:focus {
      outline: 0;
    }
    &::placeholder {
      color: #999;
    }
  }
`


export {
    LoginFormWrapStyled,
    LoginFormContentsWrapStyled,
};