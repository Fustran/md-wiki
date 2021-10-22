import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styles from './MarkdownDisplay.module.css';
const ReactDOM = require('react-dom');

const MarkdownDisplay = (props) => {

    useEffect(() => {
        ReactDOM.render(
            <ReactMarkdown>{props.text}</ReactMarkdown>,
            document.getElementById('mdContainer')
        );
    }, [props.text]);

    return (
        <div className={styles.mdContainer} id='mdContainer'></div>
    );
}

export default MarkdownDisplay;