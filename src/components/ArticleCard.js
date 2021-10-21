import styles from './ArticleCard.module.css';

const ArticleCard = (props) => {
    return (
        <div className={styles.ArticleCard}>
            <div className={styles.ArticleName}>{props.name}</div>
        </div>
    );
}

export default ArticleCard;