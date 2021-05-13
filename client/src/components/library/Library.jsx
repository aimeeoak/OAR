import React, { useState, useEffect } from 'react';

import Shelf from "./Shelf";
import useLibData from '../../hooks/library_hooks/useLibData';

import { getArticlesByProject } from "../../helpers/library/library_selectors";

export default function Library(props) {
  return (<div>
    <Shelf />
  </div>
  )
}
