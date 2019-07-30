import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  main.home-content {
    display: flex;
    justify-content: center;
    width: 80%;
    
    article {
      padding: 10px;
      width: 100%;
    }
  }
`;

export default Body;