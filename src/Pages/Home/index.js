import React from "react";
import { Link } from "react-router-dom"

const Home = () => {

    React.useEffect(() => {
        document.title = 'Minha Agenda Minha Vida - Home';
    }, []);

    return (
        <div>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Home;