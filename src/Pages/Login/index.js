import React from "react";
import LoginButton from "../../components/LoginButton";
import LoginForm from "../../components/LoginForm";

const Login = () => {

    React.useEffect(() => {
        document.title = 'Minha Agenda Minha Vida - Login';
    }, []);

    return (
        <section className="login__section">
            <div className="box__login">
                <LoginForm />
                <LoginButton />
            </div>
        </section>
    );
}

export default Login;