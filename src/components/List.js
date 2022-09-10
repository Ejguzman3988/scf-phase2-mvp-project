import React from 'react'
import Item from "./Item"

function List({ list }) {
  const listOfJSX = list.map((item) => 
                                  <Item {...item} /> )

  return (
    <ol>{listOfJSX}</ol>
  )
}

export default List