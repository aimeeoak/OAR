import React, { useState, useEffect } from 'react';

import Shelf from "./Shelf";
import SearchComp from "../search/SearchComp"
import useVisualMode from "../../hooks/useVisualMode"
import useLibData from '../../hooks/useLibData';

import { getArticlesByProject } from "../../helpers/library_selectors";

const SEARCH = "SEARCH"
const LIB = "LIB"

export default function Library(props) {
  const { mode, transition, back} = useVisualMode();
  return (<div>
{/* {mode === SEARCH && <SearchComp />}
 {mode === LIB && <Shelf />}    */}
 <SearchComp />
 <Shelf />
    
  </div>
  )
}
