import LoginButton from "../../components/LoginButton";
import LoginForm from "../../components/LoginForm";

const Login = () => {
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