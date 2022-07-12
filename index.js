import express, { request, response } from "express";
import * as ArticleService from './ArticleService.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
  const articles = ArticleService.getArticles();
  response.render('pages/home', { title: 'EJS', articles});
});

app.get('/artigos/:articleID', (request, response) => {
  const articleId = request.params.articleID;
  const article = ArticleService.getArticlesById(articleId);
  const title = (article) ? article.title : 'Artigo não encontrado';
  const pageTitle = 'EJS';
  response.render('pages/artigos', { pageTitle, title , article});
});

