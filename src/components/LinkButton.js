import { Link } from "react-router-dom";
// import styles from "./LinkButton.module.css"

const LinkButton = (props) => {
    return (
        <Link to={props.to}>
            <button type="button">
                {props.text}
            </button>
        </Link>
    );
}

export default LinkButton;