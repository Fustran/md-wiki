const articles = {};

const getKeys = () => {
    return Object.keys(articles);
}

const getValue = (key) => {
    return articles[key];
}

const setValue = (key, value) => {
    if (key === undefined || value == undefined) return null;
    articles[key] = value;
}

module.exports.articles = articles;
module.exports.getKeys = getKeys;
module.exports.getValue = getValue;
module.exports.setValue = setValue;