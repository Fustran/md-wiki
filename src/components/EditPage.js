import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticle, setArticleData } from "../services/api";
import styles from './EditPage.module.css';
import MarkdownDisplay from "./MarkdownDisplay";

const EditPage = () => {
    const { name } = useParams();
    const [inputText, setInputText] = useState();

    useEffect(() => {
        let mounted = true;
        //try to load the article text when we first open the edit page
        if (inputText === undefined) {
            getArticle(name).then(article => {
                if (mounted) {
                    if (article !== undefined) { 
                        setInputText(article); 
                        document.getElementById('input').value = article;
                    }
                    document.getElementById('input').disabled = false;
                }
            });
        }

        return () => { mounted = false; }
    }, [inputText, name]);

    const onInputChange = (e) => {
        setInputText(e.target.value);
    }

    const saveArticle = () => {
        setArticleData(name, inputText);
    }

    return (<>
        <div>editing "{name}"</div>
        <div className={styles.EditPanel}>
            <div className={styles.flexContainer}>
                <div className={styles.subtitle}>plaintext</div>
                <textarea className={styles.textArea} type="text" onChange={onInputChange} id="input" disabled></textarea> 
            </div>
            <div className={styles.flexContainer}>
                <div className={styles.subtitle}>markdown</div>
                <MarkdownDisplay className={styles.markdownArea} text={inputText} />
            </div>
        </div>
        <Link to="/">back to menu</Link>
        <Link to={"/articles/" + name}>cancel</Link>
        <button onClick={saveArticle}>Save</button>
    </>)
}

export default EditPage;