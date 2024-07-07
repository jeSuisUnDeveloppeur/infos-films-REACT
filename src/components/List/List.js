import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./List.css";
import Film from "../Film/Film";
import { getFilmsFromMdbWithText } from "../../TMDBApi";

function List() {
  const search = useParams();
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getFilmsFromMdbWithText(search.data, page).then((data) => {
      setFilms(data.results);
    },
      page);
  });
  console.log(page);

  return (
    <>
      <div className="container">
        <h2>Liste des films</h2>
        <p className="p-align-center">
          correspondant à :{search.data.toUpperCase()}
        </p>
        {films.map((film) => {
          return (
            <Film
              key={film.id}
              title={film.original_title}
              poster={film.poster_path}
              abstract={film.overview}
            />
          );
        })}
      </div>
      <button onClick={() => page>1?setPage(page - 1):null} className="btnPagination">
        page précédente
      </button>
      <button onClick={() => setPage(page + 1)} className="btnPagination">
        page suivante
      </button>
    </>
  );
}
export default List;
