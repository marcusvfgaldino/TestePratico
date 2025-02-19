import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import CalendarLogo from "../../logo.png";

const Login = () => {

    React.useEffect(() => {
        document.title = 'Minha Agenda Minha Vida - Login';
    }, []);

    return (
        <section className="login__section">
            <h1>Minha Agenda Minha Vida</h1>
            <div className="login__logo">
                <img alt="Logo" src={CalendarLogo} />
            </div>
            <div className="box__login">
                <LoginForm />
            </div>
        </section>
    );
}

export default Login;