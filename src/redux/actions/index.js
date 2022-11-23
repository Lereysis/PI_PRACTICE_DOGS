export const GET_ALL_CHARACTERS = "GETT_ALL_CHARACTERS"

export const getAllCharacter = ()=> async dispatch => {
    return fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => dispatch({type: GET_ALL_CHARACTERS, payload: data}))
}