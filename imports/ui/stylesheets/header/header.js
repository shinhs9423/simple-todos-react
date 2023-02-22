import styled from 'styled-components';

const HeaderWrapStyled = styled.header`
  background: #d2edf4;
  background-image: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);
  padding: 20px 15px 15px 15px;
  position: relative;
  box-shadow: 0 3px 3px rgba(34, 25, 25, 0.4);
`

const HeaderAppBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderAppHeaderStyled = styled.div`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  & > h1 {
    font-size: 1.5em;
    margin: 0;
    display: inline-block;
    margin-right: 1em;
    
    & span:nth-last-of-type(1) {
      color: #444;
      padding: 0 10px;
      font-size: .8em;
    }
  }
`

const HeaderLogoutButtonStyled = styled.div`
  display: flex;

  align-self: flex-end;

  margin: 8px 16px;
  font-weight: bold;

  color: #fff;
  
  &:hover {
    cursor: pointer;
  }
`
export {
    HeaderWrapStyled,
    HeaderAppBarStyled,
    HeaderAppHeaderStyled,
    HeaderLogoutButtonStyled,
};