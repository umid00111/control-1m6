import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2>Users App</h2>

      <nav>
        <Link to="/users">Пользователи</Link>
      </nav>
    </header>
  );
}

export default Header;