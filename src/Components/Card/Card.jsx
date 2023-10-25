import React, {useEffect, useState} from "react";
import {getMoviesByiD} from "../../assets/api.js";
import BasicButton from "../Button/Button.jsx";
import StarRating from "../StarRating/StarRating.jsx";

export default function Card({selectedId, onCloseMovie, onAddWatched, watched}) {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [userRating, setUserRating] = useState('');


    const isMovieWatched = watched.map((movie) => movie.imdbID).includes(selectedId);


    const {
        Title: title,
        Year: year,
        Poster: poster,
        imdbRating,
        Actors: actors,
        Genre: genre,
        Plot: plot,
        Runtime: runtime,
    } = movie;

    function handleAdd() {
        const newWatchMovie = {
            imdbID: selectedId,
            title,
            poster,
            imdbRating,
            year,
            runtime,
            userRating
        };

        onAddWatched(newWatchMovie);
        onCloseMovie();
    }

    useEffect(() => {
        const getMovieById = async () => {
            const response = await getMoviesByiD(selectedId);
            if (!response.ok) throw new Error('Failed to fetch data');

            try {
                const data = await response.json();
                setMovie(data);
                setLoading(false)
            } catch (e) {
                throw new Error(e.message);
            } finally {
                setLoading(false)
            }
        };

        getMovieById()
    }, [selectedId]);

    if (loading) return <div className="loader"/>

    return (
        <div className="card">
            <BasicButton
                onClick={onCloseMovie}
                type={'button'}
                name={''}
                className={'button--back'}
            />
            <div className="card__details details">
                <div className="details__img-wrapper">
                    <img src={poster} alt={title} className="details__img"/>
                </div>
                <div className="details__details">
                    <h2 className="details__title">{title}</h2>
                    <p className="details__timing">Year: {year}</p>
                    <p className="details__genre">Genre: {genre}</p>
                    <p className="details__rating">IMDb: {imdbRating}</p>
                </div>
            </div>
            {!isMovieWatched ?
                <>
                    <p className="card__text">Rate the movie and add it to your list!</p>
                    <StarRating
                        maxRating={10}
                        className={'card__rating'}
                        onSetRating={setUserRating}
                    />
                    {userRating > 0 && <BasicButton
                        onClick={handleAdd}
                        type={'button'}
                        name={'+ Add to list'}
                        className={'card__button button--yellow'}
                    />}
                </> :

                <div className="card__notification notification">
                    <p className="notification__text">You rated with movie!</p>
                </div>

            }
            <div className="card__description description">
                <p className="description__text">{plot}</p>
            </div>
        </div>
    )
}
