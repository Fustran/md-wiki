import { Link, useParams } from "react-router-dom";

const EditPage = () => {
    const { name } = useParams();
    return (
        <div>
            <div>edit page for {name}</div>
            <Link to="/">back to menu</Link>
        </div>
    )
}

export default EditPage;