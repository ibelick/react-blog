import React, {Component} from 'react'
import "./../styles/articlecontainer.css"
import articlesDATA from './../data/articles'

function ArticleContainer() {
  const articles = articlesDATA.articles
  console.log(articles);
  return (
    <div className="articles__wrapper">
      {articles.map(function (article) {
        return (
          <ArticleContainerUI
            key={article.key}
            title={article.title}
            texte={article.texte} />
        )
      })}
    </div>
  )
}

function ArticleContainerUI(props) {
  return(
    <div className="article">
      <h1>{props.title}</h1>
      <p>{props.texte}</p>
    </div>
  )
}

export default ArticleContainer
