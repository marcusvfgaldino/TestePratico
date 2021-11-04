import React, {useState, useContext} from "react";
import { useHistory } from "react-router";
import Context from "./Context";

const LoginForm = () => {

    if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
        localStorage.removeItem('user_name');
    }

    const [form, setForm] = useState({ username: '', password: ''});
    const { setToken } = useContext(Context);
    const history = useHistory();

    function login({ username, password }) {
        if (username === 'test_user' && password === 'user123') {
            localStorage.setItem("user_name", username);
            
            return { token: '1234' };
        } 
        return { error: 'Usuário ou senha inválido' }
    }

    function changeForm(e) {
        const {name, value} = e.target;

        setForm({ ...form, [name]: value});
    }

    function submitLogin(e) {
        e.preventDefault();

        setForm({ username: '', password: ''})

        const { token } = login(form);
    
        if (token) {
            setToken(token);
            return history.push('/');
        }
    }

    return (
        <form className="login__form" onSubmit={submitLogin}>
            <div className="login__label">
                <label>Usuário</label>
            </div>
            <div className="login__input">
                <input type="text" name="username" onChange={changeForm} value={form.username} placeholder="Usuário"></input>
            </div>
            <div className="login__label">
                <label>Senha</label>
            </div>
            <div className="login__input">
                <input type="password" name="password" onChange={changeForm} value={form.password} placeholder="Senha"></input>
            </div>
            <button className="btn_login" type='submit'>Entrar</button>
        </form>
    );
}

export default LoginForm;