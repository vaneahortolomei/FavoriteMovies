import React from "react";
import Box from "./Components/Box.jsx";
import Footer from "./Components/Footer.jsx";
import Logo from "./Components/Logo.jsx";

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <main>
                    <div className="container">
                        <section className="columns">
                            <Box className={'columns__box'}>
                                <ul className="items-list">
                                    <li className="items-list__item item">
                                        <div className="item__img-wrapper">
                                            <img src="/public/poster.jpg" alt="" className="item__img"/>
                                        </div>
                                        <div className="item__header">
                                            <p className="item__title">Inception</p>
                                            <span className="item__year">2014</span>
                                        </div>
                                    </li>
                                    <li className="items-list__item item">
                                        <div className="item__img-wrapper">
                                            <img src="/public/poster.jpg" alt="" className="item__img"/>
                                        </div>
                                        <div className="item__header">
                                            <p className="item__title">Inception</p>
                                            <span className="item__year">2014</span>
                                        </div>
                                    </li>
                                </ul>
                            </Box>
                            <Box className={'columns__box box--watched-list'}>
                                {/*<CounterPanel className={'counter-panel--fixed'}/>*/}
                                <Card/>
                            </Box>
                        </section>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    )
}

function Search({className}) {
    return (
        <div className={`${className} search`}>
            <label form="text" className="search__label"/>
            <input className="input search__input" placeholder="Search..." type="text" name="text" id="text"/>
        </div>
    )
}

function Results({className}) {
    return (
        <div className={`${className} results`}>
            <span className="results__count">Found <strong>11</strong> movies</span>
        </div>
    )
}


function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__panel">
                    <div className="header__navigation">
                        <Logo
                            className={'header__logo'}
                            imageSrc={'/public/logo.svg'}
                        />
                        <Search className={'header__search'}/>
                    </div>
                    <Results className={'header__result'}/>
                </div>
            </div>
        </header>
    )
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

function Card() {
    return (
        <div className="card">
            <div className="card__details details">
                <div className="details__img-wrapper">
                    <img src="/public/poster.jpg" alt="" className="details__img"/>
                </div>
                <div className="details__details">
                    <h2 className="details__title">Inception</h2>
                    <p className="details__timing">07 Dec 2014 - 115 min</p>
                    <p className="details__genre">Animation, Sci-fi</p>
                    <p className="details__rating">IMDb rating</p>
                </div>
            </div>
            <div className="card__rating rating">
                rating
            </div>
            <div className="card__description description">
                <p className="description__text">
                    When Earth becomes uninhabitable in the future, a farmer and ex-NASA
                    pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a
                    new planet for humans.</p>
            </div>
        </div>
    )
}


export default App
