import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwLogo } from './../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwLogo />
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/shop'>SHOP</Link>
          {
            currentUser ? (
              <span onClick={signOutUser} className="nav-link">SIGN OUT</span>
            ) :
            (<Link className='nav-link' to='/sign-in'>SIGN IN</Link>)
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;