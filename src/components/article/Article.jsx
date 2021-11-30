import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, tools, source }) => (
    <div className="gpt3__blog-container_article" id="article">
        <div className="gpt3__blog-container_article-image">
            <img src={imgUrl} alt="blog_image" />
        </div>
        <div className="gpt3__blog-container_article-content">
            <div>
                <p>{date}</p>
                <h3>{text}</h3>
                <p>{tools}</p>
            </div>
            <p>{source}</p>
        </div>
    </div>
);
export default Article
