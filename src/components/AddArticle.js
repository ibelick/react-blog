import React, {Component} from 'react'
import articlesDATA from './../data/articles'

class AddArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      texte: ''
    }

    this.addArticle = this.addArticle.bind(this);
  }

  addArticle(e) {
    var articles = articlesDATA.articles

    if (this._titleElement.value !== "" && this._texteElement.value !== "") {
      articles.unshift({
        key: Date.now(),
        title: this._titleElement.value,
        texte: this._texteElement.value
      })

      this.setState({
        articles: articles
      })

      this._titleElement.value = ""
      this._texteElement.value = ""
    }
    else {
      alert("Enter title or text")
    }

    console.log("All articles => ",articles);
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addArticle}>
          <label>
            Titre:
              <input type="text"
                    value={this.state.title}
                    onChange={(e) => this.setState({ title: e.target.value })}
                    ref={(a) => this._titleElement = a}
                    id="title"/>
          </label>
          <label>
            Texte:
              <textarea value={this.state.texte}
                        onChange={(e) => this.setState({ texte: e.target.value })}
                        ref={(a) => this._texteElement = a}
                        id="texte"/>
          </label>
          <input type="submit" value="Add article" />
        </form>
      </div>
    )
  }
}

export default AddArticleForm
