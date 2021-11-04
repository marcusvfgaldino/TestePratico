import React from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";

const Home = () => {

    React.useEffect(() => {
        document.title = 'Minha Agenda Minha Vida - Home';
    }, []);

    return (
        <div>
            <Header />
            <Search />
            <div className="title__comp">
                <h2>Compromissos de hoje</h2>
            </div>
            <div className="title__comp">
                <h2>Compromissos próximos</h2>
            </div>
            <div className="title__comp">
                <h2>Compromissos passados</h2>
            </div>
        </div>
    );
}

export default Home;