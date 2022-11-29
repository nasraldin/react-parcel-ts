import clsx from 'clsx';
import BlogIcon from 'public/svg/blog.svg';
import HolidayInIcon from 'public/svg/holidayIn.svg';
import HomeIcon from 'public/svg/home.svg';
import PricesIcon from 'public/svg/prices.svg';
import RentIcon from 'public/svg/rent.svg';
import SaleIcon from 'public/svg/sale.svg';
import SupportIcon from 'public/svg/support.svg';
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const NAVBAR_ROUTER_URL: any = {};

  return (
    <Nav className="me-auto" activeKey="">
      <a href={NAVBAR_ROUTER_URL.home}>
        <Nav.Link href={NAVBAR_ROUTER_URL.home}>
          <HomeIcon className="menu-icon" />
          <span className={clsx('menu-text')}>{'navBarMenu.home' as string}</span>
        </Nav.Link>
      </a>
      <a href={NAVBAR_ROUTER_URL.forRent}>
        <Nav.Link href={NAVBAR_ROUTER_URL.forRent}>
          <RentIcon className="menu-icon" />
          <span className={clsx('menu-text')}>{'navBarMenu.forRent' as string}</span>
        </Nav.Link>
      </a>
      <a href={NAVBAR_ROUTER_URL.forSale}>
        <Nav.Link href={NAVBAR_ROUTER_URL.forSale}>
          <SaleIcon className="menu-icon" />
          <span className={clsx('menu-text')}>{'navBarMenu.forSale' as string}</span>
        </Nav.Link>
      </a>
      <a href={NAVBAR_ROUTER_URL.holidayIn}>
        <Nav.Link href={NAVBAR_ROUTER_URL.holidayIn}>
          <HolidayInIcon className="menu-icon" />
          <span className={clsx('menu-text')}>{'navBarMenu.holidayIn' as string}</span>
        </Nav.Link>
      </a>
      <a href={NAVBAR_ROUTER_URL.prices}>
        <Nav.Link href={NAVBAR_ROUTER_URL.prices}>
          <PricesIcon className="menu-icon" />
          <span className={clsx('menu-text')}>{'navBarMenu.prices' as string}</span>
        </Nav.Link>
      </a>
      <a href={NAVBAR_ROUTER_URL.blog}>
        <Nav.Link href={NAVBAR_ROUTER_URL.blog}>
          <BlogIcon className="menu-icon" />
          <span className={clsx('menu-text')}>{'navBarMenu.blog' as string}</span>
        </Nav.Link>
      </a>
      <a href={NAVBAR_ROUTER_URL.support}>
        <Nav.Link href={NAVBAR_ROUTER_URL.support}>
          <SupportIcon className="menu-icon" />
          <span className={clsx('menu-text')}>{'navBarMenu.support' as string}</span>
        </Nav.Link>
      </a>
    </Nav>
  );
};

export default NavMenu;
