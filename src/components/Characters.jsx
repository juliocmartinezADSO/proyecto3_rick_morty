import React from "react";
import { useState, useEffect } from "react";
import { getDatos } from "../services/launches";
import { Link } from "react-router-dom";
export function Character() {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        getDatos().then(setCharacter)
    })
    return (
        <>
            <h1 className="titleCharacter">Personajes</h1>
            <ul>
                {character.map((personaje) => (
                    <li key={personaje.id} className="items">
                        <Link to={`/character/${personaje.id}`}> {personaje.name} - {personaje.species}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

