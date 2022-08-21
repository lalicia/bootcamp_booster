import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS resources 
(resources_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    topic TEXT, 
    video_link TEXT, 
    docs_link TEXT, 
    description TEXT);`;

async function createResourcesTable() {
    const res = await query(sqlString);
    console.log(res.command, "Created our resources table")
}

createResourcesTable();