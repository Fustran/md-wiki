import { Link } from 'react-router-dom';
import styles from './ArticleCard.module.css';

const ArticleCard = (props) => {
    return (
        <Link className={styles.ArticleCard} to={"/articles/" + props.name}>
            <div className={styles.ArticleName}>{props.name}</div>
        </Link>
    );
}

export default ArticleCard;