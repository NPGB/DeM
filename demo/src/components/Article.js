import React from 'react';
import '../css/article.css';

class Article extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: props.artitle[0],
            content: props.artitle[1],
        };
    }
    render() {
        return <article className='artitle-teaser'>
            <h2 className='artile-title'>{ this.state.title }</h2>
            <div className='article-content'>{ this.state.content }</div>
            </article>
    }
}


export default Article;