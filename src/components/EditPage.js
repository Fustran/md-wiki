import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LinkButton from "./LinkButton.js";
import { getArticle, setArticleData } from "../services/api";
import Header from "./Header";
import MarkdownDisplay from "./MarkdownDisplay";
import styles from './EditPage.module.css';

const EditPage = () => {
    const { name } = useParams();
    const [inputText, setInputText] = useState({loading: true, data: undefined});

    useEffect(() => {
        let mounted = true;
        //try to load the article text when we first open the edit page
        if (inputText.data === undefined) {
            getArticle(name).then(article => {
                if (mounted) {
                    setInputText({loading: false, data: article}); 
                    if (article !== undefined) {document.getElementById('input').value = article};
                    document.getElementById('input').disabled = false;
                }
            });
        }

        return () => { mounted = false; }
    }, [inputText, name]);

    const onInputChange = (e) => {
        setInputText({loading: false, data: e.target.value});
    }

    const saveArticle = () => {
        setArticleData(name, inputText.data);
    }

    return (<>
        <Header text={`Editing "${name}"`} />
        {inputText.loading === true ? <div>Loading...</div> : <></>}
        <div className={styles.EditPanel}>

            <div className={styles.flexContainer}>
                <div className={styles.subtitle}>plaintext</div>
                <textarea 
                    className={styles.textArea} 
                    type="text" 
                    onChange={onInputChange} 
                    value={inputText.data}
                    id="input" 
                    data-testid='plainInput' 
                    disabled
                ></textarea> 
            </div>

            <div className={styles.flexContainer}>
                <div className={styles.subtitle}>markdown</div>
                <MarkdownDisplay className={styles.markdownArea} text={inputText.data} />
            </div>

        </div>
        <LinkButton to="/" text="back to menu" />
        <LinkButton to={"/articles/" + name} text="cancel" />
        <button onClick={saveArticle}>Save</button>
    </>)
}

export default EditPage;