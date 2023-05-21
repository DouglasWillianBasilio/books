import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImage = styled.img`
  margin-right: 10;
`

const LogoP = styled.p`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 25px;
  margin-left: 15px;
`

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage
        src={logo}
        alt='logo'
      />
      <LogoP><strong>Books</strong></LogoP>
    </LogoContainer>
  )
}