import { useState, useEffect } from 'react';
import { getArticleList } from '../services/api';
import Header from "./Header";
import ArticleCard from './ArticleCard';
import styles from './ArticleList.module.css';

const ArticleList = () => {

    const [articleNames, setArticleNames] = useState({loading: true, data: null});

    useEffect(() => {
        let mounted = true;
        getArticleList().then(names => {
            if (mounted) { setArticleNames({loading: false, data: names}); }
        });

        return () => { mounted = false; }
    }, []);

    const generateList = () => {
        if (articleNames.loading === true) {
            return <div>Loading...</div>
        } else if (articleNames.data.length === 0) {
            return <div>No articles found.</div>;
        } else {
            return articleNames.data.map(name => <ArticleCard key={name} name={name}/>);
        }
    }

    return (<>
        <Header text={`md-wiki`} />
        <div className={styles.CardContainer}>
            {generateList()}
        </div>
    </>);
}

export default ArticleList;