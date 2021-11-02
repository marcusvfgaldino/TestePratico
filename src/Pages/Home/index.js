import { Link } from "react-router-dom";
import './global.scss';

const Home = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Home;