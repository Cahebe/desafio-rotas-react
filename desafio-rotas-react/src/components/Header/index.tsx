import { NavLink } from "react-router-dom";
import homeImg from "../../assets/home-svgrepo-com 1.svg";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav className="header-container">
        <div className="nav-items-container">
          <NavLink to="/" className={({isActive}) => isActive ? "menu-active no-decoration menu-item" : "menu-item no-decoration" }>
            Início
          </NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? "menu-active no-decoration menu-item" : "menu-item no-decoration" }>
            Produtos
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "menu-active no-decoration menu-item" : "menu-item no-decoration" }>
            Sobre nós
          </NavLink>
        </div>

        <div>
          <NavLink to="/">
            <img src={homeImg} alt="" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
