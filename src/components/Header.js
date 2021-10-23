import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={styles.Header}>
            {props.text}
        </div>
    );
}

export default Header;