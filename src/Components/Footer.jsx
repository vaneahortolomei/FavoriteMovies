import React from "react";
import Logo from "./Logo.jsx";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <Logo
                    className={'footer__logo'}
                    imageSrc={'./logo.svg'}/>
            </div>
        </footer>
    )
}
