import { Container, Logo } from "./styles";

import logoImg from '@assets/newLogo.png';

export function Header() {
  return(
    <Container>
      <Logo source={logoImg}/>
    </Container>
  )
}