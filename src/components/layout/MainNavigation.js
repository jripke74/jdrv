import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.svg';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">
          <img src={logo} alt="J & D RV Repairs" />
        </NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/about"
              className={(navData) => (navData.isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(navData) => (navData.isActive ? 'active' : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
