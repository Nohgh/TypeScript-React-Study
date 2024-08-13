import { useState } from 'react';
import styled from 'styled-components';

const StyledComponentWrapper = styled.div`
  width: 100vw;
  height: 80vh;
`;
interface Container{
  isActive:boolean;
}
const BtnSystem = styled.button<Container>`
  width: 100px;
  height: 30px;
  color: ${(props) => props.isActive ? '#FF8BBD' : 'black'};
  background-color: #FFE3EF;
  border: none;
  border-radius: 8px;
  margin: 2px;
`;

const StyledComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <StyledComponentWrapper>
      <BtnSystem isActive={isActive} onClick={handleClick}>
        click
      </BtnSystem>
    </StyledComponentWrapper>
  );
};

export default StyledComponent;
