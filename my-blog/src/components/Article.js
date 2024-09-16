// src/components/Article.js
import React from 'react';

function Article({ title, content, imgSrc }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={imgSrc} alt={`Description of ${title}`} />
      <a href="#continues">continues...</a>
    </article>
  );
}

export default Article;