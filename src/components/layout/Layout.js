import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const currentYear = new Date().getFullYear();

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        <p>&copy; {`Jeff Ripke ${currentYear}`}</p>{' '}
      </footer>
    </Fragment>
  );
};

export default Layout;
