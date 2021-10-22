import { Link } from 'react-router-dom';
import styles from './ArticleCard.module.css';

const ArticleCard = (props) => {
    return (
        <div className={styles.ArticleCard}>
            {/* <div className={styles.ArticleName}>{props.name}</div> */}
            <Link to={"/articles/" + props.name}>{props.name}</Link>
        </div>
    );
}

export default ArticleCard;