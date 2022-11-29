import Navbar from 'react-bootstrap/Navbar';

const AppLogo = () => {
  const appTitle = 'appTitle';

  return (
    <Navbar.Brand href="/" aria-label="Application logo">
      <span className="app-brand">{appTitle}</span>
    </Navbar.Brand>
  );
};

export default AppLogo;
