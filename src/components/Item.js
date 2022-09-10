import React from 'react'

// {
//   "name": "bulbasaur",
//   "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
//   "pokeType": "grass"
// }

function Item({name, image, pokeType}) {
  return (
    <li>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{pokeType}</p>
    </li>
  )
}

export default Item