import React from "react";

import ListItem from "../ListItem/ListItem";

//takes in state (results from database), filters for document resources, maps through and renders ListItem passing down the link and description as props
function List({topicState}) {

    return (
            topicState
            .filter((item) => {
                return item.docs_link !== null;
            }).map(function (item) {
                return (
                <ListItem docsLink={item.docs_link} description={item.description}/>
                )
                }
            )
    )
}




export default List;