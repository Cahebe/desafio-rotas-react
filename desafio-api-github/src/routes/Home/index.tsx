import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <>
      <main>
        <div className="home-main-container">
          <h1>Desafio Github API</h1>
          <h3>DevSuperior - Escola de programação</h3>
        </div>
        <Link to="search">
          <button>Começar</button>
        </Link>
      </main>
    </>
  );
}
