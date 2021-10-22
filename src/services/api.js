export const getArticleList = () => {
    return fetch('http://localhost:9090/articles').then(data => data.json());
}

export const getArticle = (name) => {
    return fetch(`http://localhost:9090/articles/${name}`).then(data => data.text());
}
