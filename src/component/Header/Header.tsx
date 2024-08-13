import styled from "styled-components"

const Header = () => {
  
  const HeaderLine=styled.div`
  width: 100vw;
  height: 30px;
  border-bottom:1px solid black;`

  return (
    <HeaderLine>Header</HeaderLine>
  )
}

export default Header