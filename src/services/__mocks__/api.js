const testDB = {
    'Article 1': 'Article 1 body',
    'Article 2': 'Article 2 body',
    'Article 3': 'Article 3 body'
}

export const getArticleList = () => {
    return Promise.resolve(Object.keys(testDB));
}

export const getArticle = (name) => {
    return Promise.resolve(testDB[name]);
}

export const setArticleData = (name, data) => {
    testDB[name] = data;
}