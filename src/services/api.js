import { config } from './apiConfig';

export const getArticleList = () => {
    return fetch(`${config.url}/articles`).then(data => data.json());
}

export const getArticle = (name) => {
    return fetch(`${config.url}/articles/${name}`).then(data => {
        if (data.status !== 404) {
            return data.text();
        } else {
            return undefined;
        }
    });
}

export const setArticleData = (name, data) => {
    return fetch(`${config.url}/articles/${name}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data
    });
}