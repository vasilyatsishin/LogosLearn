import { useParams } from "react-router-dom";

const Er404 = () => {
    const { userId } = useParams();
    console.log(userId)
    return (
        <div>
            <h1>NotFoundPage</h1>
        </div>
    )
}

export default Er404