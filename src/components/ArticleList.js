import { useState, useEffect } from 'react';
import { getArticleList } from '../services/api';
import ArticleCard from './ArticleCard';
import styles from './ArticleList.module.css';

const ArticleList = () => {

    const [articleNames, setArticleNames] = useState([]);

    useEffect(() => {
        getArticleList().then(names => setArticleNames(names));
    });

    

    return (
        <div className={styles.CardContainer}>
            {articleNames.map(name => <ArticleCard name={name}/>) }
        </div>
    );
}

export default ArticleList;