function getArticleGenerator(articles) {
    const output = document.querySelector('#content');

    function showArticle() {
        if (articles.length != 0) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
            output.appendChild(article);
        }
    }

    return showArticle;
}
