import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header>
      <div>J & D RV Repairs</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
