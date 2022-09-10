import React, {useState} from 'react'
import { useHistory } from "react-router-dom"

// {
//   "name": "bulbasaur",
//   "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
//   "pokeType": "grass"
// }

function Form({setList}) {
  const initState = {
    name: "",
    image: "",
    pokeType: ""
  }
  const history = useHistory()
  const [formData, setFormData] = useState(initState)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:4000/pokemons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => {
        setList((list) => [...list, data])
        history.push('/resources')
      })

    setFormData(initState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label> 
        <input name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="image">Image: </label> 
        <input name="image" value={formData.image} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="pokeType">PokeType: </label> 
        <input name="pokeType" value={formData.pokeType} onChange={handleChange} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form