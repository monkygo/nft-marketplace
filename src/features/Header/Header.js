import { Button } from "../../components/styles/Button.styled";
import { Container } from "../../components/styles/Container.styled";
import { Flex } from "../../components/styles/Flex.styled";
import {
  Nav,
  StyledHeader,
  Logo,
  Image,
} from "../../components/styles/StyledHeader.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./logo192.png" alt=""></Logo>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community</h1>
            <p>
              test test test test test test test test test test test test test
              test test
            </p>
          </div>
          <Image src="./img/img_avatar2.png" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
