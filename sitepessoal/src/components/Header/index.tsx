import "./styles.css";

export default function Header() {
  return (
    <header className="msp-header">
      <div className="msp-logo-container">
        <h1>Cahebe</h1>
        <h1 className="dot">.</h1>
      </div>
      <div>
        <ul className="msp-header-menu-container">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Sobre Mim</a>
          </li>
        </ul>
      </div>
      <div className="msp-social-media-container"></div>
    </header>
  );
}
