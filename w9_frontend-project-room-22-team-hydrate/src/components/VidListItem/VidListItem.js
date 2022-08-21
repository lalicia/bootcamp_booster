import React from "react";

//uses props to formulate list items as links
function VidListItem({vidLink, description}) {

    return (
         <li className="link"><a href={vidLink} target="_blank" rel="noopener noreferrer">{description}</a></li>
    );
}

export default VidListItem;