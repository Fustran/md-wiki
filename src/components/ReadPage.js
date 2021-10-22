import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticle } from "../services/api";
import MarkdownDisplay from "./MarkdownDisplay";
import styles from './ReadPage.module.css';

const ReadPage = () => {
    const [articleText, setAriticleText] = useState({loading: true, data: null});
    const { name } = useParams();

    useEffect(() => {
        let mounted = true;
        getArticle(name).then(article => {
            if (mounted) { setAriticleText({loading: false, data: article}); }
        });

        return () => { mounted = false; }
    }, [name]);

    const ArticleText = () => {
        if (articleText.loading === true) {
            return <div>Loading...</div>
        } else if (articleText.data === undefined) {
            return <div>No article with this exact name found. Use the Edit button in the header to add it.</div>;
        } else {
            //markdown component
            return <MarkdownDisplay text={articleText.data} />
            // return <div>{articleText.data}</div>;
        }
    }

    return (
        <div className={styles.ReadPage}>
            <div>read page for {name}</div>
            <div className={styles.mdSpacer}>{ArticleText()}</div>
            <Link to={"/articles/edit/" + name}>edit</Link>
            <Link to="/">back to menu</Link>
        </div>
    )
}

export default ReadPage;