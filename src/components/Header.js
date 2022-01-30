import React from "react";
import { Container } from "./styles/Container.styles";

import { Styledheader } from "./styles/Header.styled";

export default function Header() {
  return (
    <Styledheader>
      <Container>
        <h1>testApp</h1>
      </Container>
    </Styledheader>
  );
}
