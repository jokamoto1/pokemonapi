import React, { useState } from "react"
import axios from "axios"
const Button = () => {
    const [state, setState] = useState()
    const api = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(response => response.json())
            .then(jsonRes => console.log(jsonRes))
            .catch(error => console.log(error))
    }
    const api2 = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(response => setState(response.data.results))
            // .then(response => console.log(response.data.results))
            .catch(error => console.log(error))
    }

    return (
        <div>

            <button onClick={api2}>Fetch Pokemon Axios</button>
            {
                (state) ?
                    <div>
                        <div>
                            {state.map((pokemon) => <h1>{pokemon.name}</h1>)}
                        </div>
                    </div> : <h1>Click</h1>
            } 
        </div>


    )
}
export default Button