const API_TOKEN = "7c32d8c75f5a1286f73d493958297162";

export function getFilmsFromMdbWithText(text, page){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${page}`;
    return fetch(url)
    .then((response)=> response.json())
    .catch((error)=> console.log(error))
}