import React from "react";
import Pokecard from "./Pokecard";


const Pokedex = ({pokemon}) => {
    return (
    <div>
        <h2>Pokedex</h2>
        <div>
            {pokemon.map(p=>(
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.based_experence} />
            ))}
        </div>
    </div>
   )
}


export default Pokedex;