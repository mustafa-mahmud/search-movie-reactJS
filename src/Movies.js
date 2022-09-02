import React from 'react';
import { useGlobalContext } from './context';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { isLoading, movieData } = useGlobalContext();

  if (isLoading) return <div className="loading"></div>;

  return (
    <section className="movies">
      {movieData.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

        return (
          <a
            key={id}
            href={`/movie/${id}`}
            className="movie"
            target="_blank"
            rel="noreferrer"
          >
            <article>
              <img src={poster === 'N/A' ? url : poster} alt={title} />

              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </a>
        );
      })}
    </section>
  );
};

export default Movies;
