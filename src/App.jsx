import React, {useState, useEffect} from "react";
import Box from "./Components/Box.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import ItemsList from "./Components/ItemList.jsx";
import useMoviesData from "../src/hooks/useMovieData.jsx";
import {staticTopList} from "../src/data/staticTopList.js";
import Card from "./Components/Card/Card.jsx";
import CounterPanel from "./Components/CounterPanel.jsx";
import Item from "./Components/Item/Item.jsx";
import WatchedList from "./Components/WatchedList/WatchedList.jsx";

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
                                            onCloseMovie={handleCloseMovie}
                                            watched={watched}
                                        /> :

                                        <>
                                            <CounterPanel
                                                className={'counter-panel--fixed'}
                                                watched={watched}/>
                                            <WatchedList
                                                watched={watched}/>
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


const MovieItemsList = ({data, onShowDetails}) => {
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
}

function GetListOfData({query, onShowDetails, setMoviesData}) {
    const {data, loading} = useMoviesData(query, setMoviesData);


    if (loading) return <div className="loader"/>

    const dataList = data && data.length !== 0 ? data : staticTopList;

    return (
        <MovieItemsList
            data={dataList}
            onShowDetails={onShowDetails}
        />
    )
}

export default App
