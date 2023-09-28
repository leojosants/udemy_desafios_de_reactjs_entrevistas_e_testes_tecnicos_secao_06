import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    return (
        <div>
            <h2>Resultados de busca para: {query}</h2>
            <p>Aqui viria os itens da busca...</p>
        </div>
    );
};

export default Search;