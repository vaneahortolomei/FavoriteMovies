import React, {useState, useEffect} from "react";
import Box from "./Components/Box.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import ItemsList from "./Components/ItemList.jsx";
import {getMoviesByTitle, getMoviesByiD, staticTopList} from "../src/assets/api.js";
import BasicButton from "./Components/Button/Button.jsx";
import StarRating from "./Components/StarRating/StarRating.jsx";

function App() {
    const [moviesData, setMoviesData] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedId, setSelectedId] = useState(null);
    const [watched, setWatchMovie] = useState(function () {
        const storeValue = localStorage.getItem('watched');
        try {
            return storeValue ? JSON.parse(storeValue) : [];
        } catch (error) {
            console.error("Error parsing localStorage 'watched' value:", error);
            return [];
        }
    });

    function handleItem(id) {
        setSelectedId((selectedId) => id === selectedId ? null : id);
    }

    function handleCloseMovie() {
        setSelectedId(null)
    }

    function handleAddWatchMovie(movie) {
        setWatchMovie((watched) => [...watched, movie])
    }

    useEffect(() => {
        localStorage.setItem('watched', JSON.stringify(watched));
    }, [watched]);

    return (
        <div className="wrapper">
            <Header query={query} setQuery={setQuery} movieCount={moviesData.length}/>
            <div className="content">
                <main>
                    <div className="container">
                        <section className="columns">
                            <Box className={'columns__box'}>
                                <GetListOfData
                                    query={query}
                                    onShowDetails={handleItem}
                                    setMoviesData={setMoviesData}
                                />
                            </Box>
                            <Box className={'columns__box box--watched-list'}>
                                {
                                    selectedId ?
                                        <Card
                                            selectedId={selectedId}
                                            onAddWatched={handleAddWatchMovie}
                                            onCloseMovie={handleCloseMovie}/> :

                                        <>
                                            <CounterPanel className={'counter-panel--fixed'}/>
                                            <WatchedMovieslList watched={watched}/>
                                        </>

                                }
                            </Box>
                        </section>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    )
}


function Item({item, onShowDetails}) {
    return (
        <li onClick={() => onShowDetails(item.imdbID)} className="items-list__item item">
            <div className="item__img-wrapper">
                <img src={item.Poster} alt={item.Title} className="item__img"/>
            </div>
            <div className="item__header">
                <p className="item__title">{item.Title}</p>
                <span className="item__year">{item.Year}</span>
            </div>
        </li>
    )
}


function GetListOfData({query, onShowDetails, setMoviesData}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const moviesData = async () => {
            const response = await getMoviesByTitle(query);

            if (!response.ok) throw new Error('Failed to fetch data');

            try {
                const data = await response.json();

                setData(data.Search);
                setLoading(false);
            } catch (e) {
                console.error(e.message);

            } finally {
                setLoading(false);
            }


            if (!query.length) {
                setData([]);
            }
        };


        moviesData();

    }, [query, setMoviesData]);


    if (loading) return <div>Loading...</div>


    if (data && data.length !== 0) {
        return (
            <ItemsList>
                {data.map((item, index) => (
                    <Item
                        item={item}
                        key={index}
                        onShowDetails={onShowDetails}
                    />
                ))}
            </ItemsList>
        )
    } else {
        return (
            <ItemsList>
                {staticTopList.map((item, index) => (
                    <Item
                        item={item}
                        key={index}
                        onShowDetails={onShowDetails}
                    />
                ))}
            </ItemsList>
        )
    }
}

function CounterPanel({className}) {
    return (
        <div className={`counter-panel ${className}`}>
            <header className="counter-panel__title">Movies you watched</header>
            <div className="counter-panel__options">
                <p className="counter-panel__option">0 movies</p>
                <p className="counter-panel__option">0</p>
                <p className="counter-panel__option">0</p>
                <p className="counter-panel__option">0 min</p>
            </div>
        </div>
    )
}

function WatchedMovieslList({watched}) {
    return (
        <ItemsList>
            {watched.map(item => (
                <WatchedItem
                    item={item}
                    key={item.imdbRating}
                />
            ))}
        </ItemsList>
    )
}

function WatchedItem({item}) {
    return (
        <li className="items-list__item item">
            <div className="item__img-wrapper">
                <img src={item.poster} alt={item.title} className="item__img"/>
            </div>
            <div className="item__header">
                <p className="item__title">{item.title}</p>
                <div className="item__options">
                    <p>{item.imdbRating}</p>
                    <p>8</p>
                    <p>{item.runtime}</p>
                </div>
            </div>
        </li>
    )
}

function Card({selectedId, onCloseMovie, onAddWatched}) {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

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
            imdbRating,
            title,
            poster,
            year,
            runtime
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

    if (loading) return <div>Loading...</div>

    return (
        <div className="card">
            <BasicButton
                onClick={onCloseMovie}
                type={'button'}
                name={'<'}
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
            <StarRating
                maxRating={10}
                className={'card__rating'}
            />
            <BasicButton
                onClick={handleAdd}
                type={'button'}
                name={'+ Add to list'}
                className={'card__button button--yellow'}
            />
            <div className="card__description description">
                <p className="description__text">{plot}</p>
            </div>
        </div>
    )
}


export default App
