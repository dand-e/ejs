const articles = [
  {
    id: 1,
    title: 'Construindo diversidade nas empresas: como os grupos fomentam boas práticas?',
    description: ' diversidade nas empresas'
  },
  {
    id: 2,
    title: 'Entenda por que Elon Musk não vai mais comprar o Twitter',
    description: 'CEO da Tesla e da Space X atribui desistência aos bots e contas falsas na plataforma'
  }
]

function getArticles(){
  return articles;
};

function getArticlesById(articleID){
  return articles.find(
    article => {
      return article.id === Number(articleID)
    }
  );
};

export { getArticles, getArticlesById }
