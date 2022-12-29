import React from 'react';
import "./index.css"
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import Header from "./component/Header";

const App = () => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
            </Routes>
        </>
    );
}

export default App;
