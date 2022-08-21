import React from "react";
import {useNavigate} from "react-router-dom";
import CatDrumError from "../assets/CatDrumError.gif";

function ErrorPage() {
    let navigate = useNavigate();
    return (
        <> 
            <h1> Impromptu Dance Party! </h1>
            <h2>This Booster isn't available yet - but this cat is bopping to some bongos, so there's that</h2>
            <div>
            <img src={CatDrumError} alt="cat bopping to bongos"/>
            </div>
            <button className="back-button" role="button" onClick={() => {navigate("/");}}>Back to Home</button>
        </>
    )
}

export default ErrorPage;