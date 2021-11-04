import React from "react";
import { Link } from "react-router-dom";
import CalendarLogo from "../../logo.png";
import Clock from "../Clock/Clock";

const Header = () => {

    const userName = localStorage.getItem('user_name');

    return (
        <header>
            <div className="header__logo">
                <Link to="/">
                    <img alt="Logo" src={CalendarLogo} />
                </Link>
            </div>
            <div className="header__Clock">
                <Clock />
            </div>
            <div className="header__user">
               Olá, { userName }  <Link to="/login">Sair</Link>
            </div>
        </header>
    )
}

export default Header;