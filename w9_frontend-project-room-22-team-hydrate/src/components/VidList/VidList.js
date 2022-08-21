import React from "react";

import VidListItem from "../VidListItem/VidListItem";


//takes in state (results from database), filters for document resources, maps through and renders ListItem passing down the link and description as props
function VidList({topicState}) {

    return (
            topicState
            .filter((item) => {
                return item.video_link !== null;
            }).map(function (item) {
                return (
                <VidListItem vidLink={item.video_link} description={item.description}/>
                )
                }
            )
    )
}




export default VidList;