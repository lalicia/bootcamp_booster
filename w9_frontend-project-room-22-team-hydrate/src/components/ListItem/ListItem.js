import React from "react";

//uses props to formulate list items as links
function ListItem({docsLink, description}) {

    return (
         <li className="link"><a href={docsLink} target="_blank" rel="noopener noreferrer">{description}</a></li>
    );
}

export default ListItem;