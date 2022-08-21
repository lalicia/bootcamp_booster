import React from "react";

//import for React Router to allow page transitions
import {useNavigate} from "react-router-dom";

//imports for images
import BootcampBoosterLogo from "../assets/BootcampBoosterLogo.png";
import HtmlButton from "../assets/HtmlButton.png"
import CssButton from "../assets/CssButton.png";
import ReactButton from "../assets/ReactButton.png";
import UiuxButton from "../assets/UiuxButton.png";

//function uses navigate hook to move pages; buttons call the function, each button set to corresponding image in assets folder
function Home() {
    let navigate = useNavigate();
    return (
        <>
            <img className="logo" src={BootcampBoosterLogo} alt="BootcampBoosterLogo" />
            <h2>What would you like a boost on today?</h2>
            <div>
                <button className="topic-button" role="button" onClick={() => {navigate("/html");}}><img className="topic-pic" src={HtmlButton} alt="html button"/></button>
                <button className="topic-button" role="button" onClick={() => {navigate("/css");}}><img className="topic-pic" src={CssButton} alt="css button"/></button>
            </div>
            <div>
                <button className="topic-button" role="button" onClick={() => {navigate("/react");}}><img className="topic-pic" src={ReactButton} alt="react button"/></button>
                <button className="topic-button" role="button" onClick={() => {navigate("/uiux");}}><img className="topic-pic" src={UiuxButton} alt="uiux button"/></button>
            </div>
        </>
    )
}

export default Home;