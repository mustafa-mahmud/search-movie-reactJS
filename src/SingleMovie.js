import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';
import useHelper from './useHelper';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
  const { id } = useParams();
  const { movieData, isLoading, fetchMovie } = useHelper();

  const { Title, Year, Plot, Poster } = movieData;

  useEffect(() => {
    fetchMovie(`i=${id}`);
  }, [id]);

  if (isLoading) return <div className="loading"></div>;

  return (
    <section className="single-movie">
      <img src={Poster === 'N/A' ? url : Poster} alt={Title} />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>

        <a href="/" className="btn">
          back to home
        </a>
      </div>
    </section>
  );
};

export default SingleMovie;
