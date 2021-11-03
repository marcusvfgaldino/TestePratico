const LoginForm = () => {
    return (
        <div className="login__form">
            <div className="login__label">
                <label>Usuário</label>
            </div>
            <div className="login__input">
                <input type="text" placeholder="Usuário"></input>
            </div>
            <div className="login__label">
                <label>Senha</label>
            </div>
            <div className="login__input">
                <input type="password" placeholder="Senha"></input>
            </div>
        </div>
    );
}

export default LoginForm;