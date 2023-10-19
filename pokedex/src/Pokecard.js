import React from "react";

/** Individual Pokemon card.
 *
 * Props:
 * - name
 * - image
 * - type
 * - exp: (number of experience points)
 *
 * */
const Pokecard = ({id,exp,name,type}) => {
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png.`

    return (
        <div>
            <img src={img} alt={name}/>
            <div>Name: {name} </div>
            <div>Type: {type} </div>
            <div>EXP: {exp} </div>
        </div>
    );
}

export default Pokecard;