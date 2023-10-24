import React from "react";
import Logo from "./Logo.jsx";
import Search from "../Components/Search.jsx";
import Results from "../Components/Results.jsx";

export default function Header({query, setQuery, movieCount}) {

    return (
        <header className="header">
            <div className="container">
                <div className="header__panel">
                    <div className="header__navigation">
                        <Logo
                            className={'header__logo'}
                            imageSrc={'./logo.svg'}
                        />
                        <Search
                            className={'header__search'}
                            query={query}
                            setQuery={setQuery}/>
                    </div>
                    <Results className={'header__result'} movieCount={movieCount}/>
                </div>
            </div>
        </header>
    )
}
