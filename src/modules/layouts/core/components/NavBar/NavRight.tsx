// import LanguageSwitcher, { MenuType } from '~shared/components/LanguageSwitcher';

import AccountIcon from 'public/svg/account.svg';
import AppDialog from '~shared/components/AppDialog';
import FavoritesIcon from 'public/svg/favorites.svg';
import HistoryIcon from 'public/svg/history.svg';
import LanguageIcon from 'public/svg/language.svg';
import Nav from 'react-bootstrap/Nav';
import NotificationsIcon from 'public/svg/notifications.svg';

export const NavRight = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);  onClick={handleShow}

  return (
    <Nav className="customer-icons-wrp">
      <Nav.Link aria-label="Flag of United Arab Emirates">
        <span className="fi fi-ae country-icon"></span>
      </Nav.Link>
      <Nav.Link className="currency-icon" aria-label="Currency of UAE">
        AED
      </Nav.Link>
      <Nav.Link>
        <LanguageIcon className="customer-icon" />
        <AppDialog
        // isOpen={show}
        // onClose={handleClose}
        // actions={true}
        // label={'changeLanguage' as string}
        // size="sm"
        // content={<LanguageSwitcher menuType={MenuType.Select} />}
        />
      </Nav.Link>
      <Nav.Link>
        <HistoryIcon className="customer-icon" />
      </Nav.Link>
      <Nav.Link>
        <FavoritesIcon className="customer-icon" />
      </Nav.Link>
      <Nav.Link>
        <NotificationsIcon className="customer-icon" />
      </Nav.Link>
      <Nav.Link>
        <AccountIcon className="customer-icon" />
      </Nav.Link>
    </Nav>
  );
};
