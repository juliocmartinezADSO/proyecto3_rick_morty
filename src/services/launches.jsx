export const API_URL = `https://rickandmortyapi.com/api/character`

export async function getDatos() {
    const data = await fetch(`${API_URL}`)
    const datos = await data.json()
    const characters = datos.results
    return characters
}

