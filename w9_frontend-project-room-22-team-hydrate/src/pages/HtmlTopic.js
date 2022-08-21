import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import BootcampBoosterLogo from "../assets/BootcampBoosterLogo.png"

import List from "../components/List/List";
import VidList from "../components/VidList/VidList";

//calls fetchItems function with useEffect on page load to send fetch to backend, data then set as state and handed as props to List and VidList
function HtmlTopic() {

    const [topicState, setTopicState] = useState([]);
    
    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await fetch("http://localhost:3000/resources/HTML");
        const data = await response.json();
        //console.log(data);
        setTopicState(data.payload);
    };
    
    let navigate = useNavigate();
    return (
        <>
            <img className="logo" src={BootcampBoosterLogo} alt="BootcampBoosterLogo" />
            <h2> Here are some HTML Boosters </h2>
            <h3>Reading Resources</h3>
            <List topicState={topicState}/>
            <h3>Video Resources</h3>
            <VidList topicState={topicState}/>
            <button className="back-button" role="button" onClick={() => {navigate("/");}}>Back to Home</button>
        </>
    )
}

export default HtmlTopic;