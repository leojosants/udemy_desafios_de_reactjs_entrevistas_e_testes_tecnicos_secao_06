import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Início</h2>

            {/* 3 - navigation links */}
            <ul>
                <li>
                    <Link to={'/usuarios/1'}>Usuário 1</Link>
                </li>
                
                <li>
                    <Link to={'/usuarios/2'}>Usuário 2</Link>
                </li>

                <li>
                    <Link to={'/usuarios/3'}>Usuário 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;