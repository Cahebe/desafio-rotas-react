import { NavLink, Outlet } from "react-router-dom";
import "./styles.css";

export default function Products() {
  return (
    <>
      <main>
        <nav className="products-container mt20">
          <NavLink to="computers" className={({isActive}) => isActive ? "menu-active no-decoration menu-item" : "menu-item no-decoration" }>
            Computadores
          </NavLink>
          <NavLink to="eletronics" className={({isActive}) => isActive ? "menu-active no-decoration menu-item" : "menu-item no-decoration" }>
            Eletrônicos
          </NavLink>
          <NavLink to="books" className={({isActive}) => isActive ? "menu-active no-decoration menu-item" : "menu-item no-decoration" }>
            Livros
          </NavLink>
        </nav>
        <Outlet />
      </main>
    </>
  );
}
