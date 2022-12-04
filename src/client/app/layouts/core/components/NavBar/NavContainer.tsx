import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import AppLogo from '../AppLogo';

import { NavMenu } from './NavLeft';
import { NavRight } from './NavRight';

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <AppLogo />
        <Navbar.Toggle aria-controls="navbar-toggle-navigation" aria-label="Toggle navigation" />
        <Navbar.Collapse id="navbar-toggle-navigation">
          <NavMenu />
          <NavRight />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
