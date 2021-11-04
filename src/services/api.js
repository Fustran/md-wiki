export const getArticleList = () => {
    return fetch('http://localhost:9090/articles').then(data => data.json());
}

export const getArticle = (name) => {
    return fetch(`http://localhost:9090/articles/${name}`).then(data => {
        if (data.status !== 404) {
            return data.text();
        } else {
            return undefined;
        }
    });
}

export const setArticleData = (name, data) => {
    fetch(`http://localhost:9090/articles/${name}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data
    });
}