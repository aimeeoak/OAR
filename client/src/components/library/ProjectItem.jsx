import React from "react";
import classnames from 'classnames';

export default function ProjectItem(props) {
  const listClass = classnames("project__item", {
    "project__item--selected": props.selected,
  });

  return (
    <li className={listClass} onClick={() => props.setProject(props.name)}>
      <h2>{props.name}</h2>
    </li>
  );
}