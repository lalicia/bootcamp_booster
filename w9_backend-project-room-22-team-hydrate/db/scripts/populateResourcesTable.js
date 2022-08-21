import { query } from "../index.js";
import { resources } from "../../libs/resources.js";

async function populateResourcesTable() {
    for (let i=0; i< resources.length; i++)  {
        const res = await query(
            `INSERT INTO resources (topic, video_link, docs_link, description)
            VALUES ($1, $2, $3, $4);`,
            [resources[i].topic, resources[i].video_link, resources[i].docs_link, resources[i].description]
       );
       console.log(`populate with ${resources[i].topic}`);
    
    }
    }

populateResourcesTable();