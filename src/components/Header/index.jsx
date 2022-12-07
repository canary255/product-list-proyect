import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="title">
        <Link to="/">
          <img
            className="logoFlat"
            src="https://sylius.com/wp-content/uploads/2019/10/flat101.png"
            alt="Flat 101"
          />
        </Link>
      </div>
      <div className="icon">
        <Link to="/crearProducto">
          <i className="fa-regular fa-plus fa-xl"></i>
          <p>Añadir producto</p>
        </Link>
      </div>
    </header>
  );
};
