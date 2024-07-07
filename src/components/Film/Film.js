import './Film.css'

function Film({title,abstract,poster}){
    return(
        <div className="film">
            <h3>{title}</h3>
            <img src= {`https://image.tmdb.org/t/p/w300${poster}`} alt="poster du film"/>
            <p>{abstract}</p>
        </div>
    )
}
export default Film;