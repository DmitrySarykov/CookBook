import React from "react";
import { Link } from "react-router-dom";

function Header() {
  
    return (
        <header className="header">
            <Link to='/'><h1>Кулинарная книга</h1></Link>
            <ul className="header-menu">
                <li><a className="menu-link" href='/swagger/'>Swagger api</a></li>
                <li><a className="menu-link" href='/openapi/'>Документация api</a></li>
            </ul>
        </header>
    );
}
export default Header;