import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticle } from "../services/api";

const ReadPage = () => {
    const [articleText, setAriticleText] = useState();
    const { name } = useParams();

    useEffect(() => {
        getArticle(name).then(article => {
            setAriticleText(article);
        });
    }, [name]);

    return (
        <div>
            <div>read page for {name}</div>
            <div>{articleText}</div>
            <Link to={"/articles/edit/" + name}>edit</Link>
            <Link to="/">back to menu</Link>
        </div>
    )
}

export default ReadPage;