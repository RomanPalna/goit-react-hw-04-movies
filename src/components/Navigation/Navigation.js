import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';

const Navigation = () => (
  <nav className={s.navigation}>
    <NavLink exact to="/" className={s.link} activeClassName={s.activelink}>
      Home
    </NavLink>
    <NavLink to="/movies" className={s.link} activeClassName={s.activelink}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
