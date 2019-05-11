import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import DesktopContainer from '../components/DesktopContainer';

const Main = ({ children }) => (
  <DesktopContainer>
    <Segment vertical>
      <Container>
        {children}
      </Container>
    </Segment>
  </DesktopContainer>
);

export default Main;
