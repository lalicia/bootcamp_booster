
import { query } from "../index.js";

const docString = `SELECT * FROM resources WHERE docs_link IS NOT NULL;`

async function createDocTable() {
    const res = await query(docString);
    //return 
    console.log(res.command, "Created our Document resources table")
}

createDocTable();