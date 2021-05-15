import React from "react";
import classnames from 'classnames';

export default function ArticleItem(props) {
  const listClass = classnames("article__item", {
    "article__item--selected": props.selected,
  });

  return (
    <ul>
      <li className={listClass} onClick={() => props.setArticle(props.name)}>
      <h3>{props.title}</h3>
    </li>
    <li>
      <h5>By: {props.authors}</h5> 
      <h5>Language: {props.language}</h5> 
      <h5>Keywords: {props.keywords}</h5> 
      <h5><a href = {props.content} target="_blank"> Link to Full Text</a></h5> 
    </li>
    </ul>
  );

}