import { query } from "../index.js";

const vidString = `SELECT * FROM resources WHERE video_link IS NOT NULL;`

async function createVideoTable() {
    const res = await query(vidString);
    //return 
    console.log(res.command, "Created our Video resources table")
}

createVideoTable();