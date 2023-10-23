import React from "react";

function App() {

  return (
    <div className="wrapper">
        <Header/>
            <div className="content">
                <div className="container">
                    container
                </div>
            </div>
        <Footer/>
    </div>
  )
}


function Header(){
    return (
        <div>
            header
        </div>
    )
}

function Footer(){
    return (
        <div>Footer</div>
    )
}


export default App
