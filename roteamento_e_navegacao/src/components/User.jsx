import { useParams } from "react-router-dom";

const User = () => {
    let { userId } = useParams();

    return (
        <div>
            <h2>ID do usuário: {userId}</h2>
        </div>
    );
};

export default User;