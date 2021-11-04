import { Link } from "react-router-dom";

const LinkButton = (props) => {
    return (
        <Link to={props.to}>
            <button type="button" id='button'>
                {props.text}
            </button>
        </Link>
    );
}

export default LinkButton;