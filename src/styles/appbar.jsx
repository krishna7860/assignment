import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';


export const AppBarStyled = styled(AppBar)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  padding: 10px 20px;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

export const LogoContainer = styled.div` 
  display: flex;
  flex-direction: row;
`;