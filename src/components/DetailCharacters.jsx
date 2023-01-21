import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../services/launches";
export function DetailCharacters() {
    const { id } = useParams()
    const [character, setCharacter] = useState([])

    useEffect(() => {
        getDatos()
    }, [])

    const getDatos = async () => {
        const data = await fetch(`${API.API_URL}/${id}`)
        const character = await data.json()
        setCharacter(character)
    }

    return (<>
            <h1 className="titleCharacter">Detail Character</h1>
        <div className="containerDetail">            
        <h3 className="titleCharacter">{character.name}</h3>
            <p className="titleCharacter">{character.status} - {character.gender}</p>
            <img src={character.image} alt="" />

        </div>

    </>);
}

