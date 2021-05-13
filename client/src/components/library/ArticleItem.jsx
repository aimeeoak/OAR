import React from "react";
import classnames from 'classnames';

export default function ArticleItem(props) {
  const listClass = classnames("article__item", {
    "article__item--selected": props.selected,
  });

  return (
    <li className={listClass} onClick={() => props.setArticle(props.name)}>
      <h2>{props.name}</h2>
    </li>
  );
}