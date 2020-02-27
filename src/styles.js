import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  a {
    color: #FFFFFF;
    text-decoration: none;
    
    :visited {
      color: #FFFFFF;
    }
  }
  
  body {
    color: #FFFFFF;
    background: #424874;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;
