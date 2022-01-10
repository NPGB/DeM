import React from 'react';
import '../css/article.css';

class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "lorem",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit   ."
        };
    }
    render() {
        return <article>
            <h2 className='artile-title'>{ this.state.title }</h2>
            <div className='article-content'>{ this.state.content }</div>
            </article>
    }
}


export default Article;