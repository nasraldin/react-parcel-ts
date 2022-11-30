import AppLogo from '~shared/components/AppLogo';
import Container from 'react-bootstrap/Container';
import { NavMenu } from './NavLeft';
import { NavRight } from './NavRight';
import Navbar from 'react-bootstrap/Navbar';

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
