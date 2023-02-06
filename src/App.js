import FactsMain from "./components/Facts-main"
import FactsNavbar from "./components/Facts-navbar"
import React from "react"
// import FactsStyle from "./Facts-style.css"
import FactsFooter from "./components/Facts-footer"
import CardStyle from "./Card-style.css"
import CardInfo from "./components/Card-info"
import CardMain from "./components/Card-main"
import Footer from "./components/Card-footer"

function App() {
    return(
        <>
            <CardInfo/>
            <CardMain/>
            <Footer/>
        </>
    )
}

export default App