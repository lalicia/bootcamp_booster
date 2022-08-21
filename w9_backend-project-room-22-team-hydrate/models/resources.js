import topic from "../libs/resources.js";
//import pool from "../db/index.js";
import {query} from "../db/index.js";

// GET ALL RESOURCES
export async function getResources() {
    const result = await query(`SELECT * FROM resources`);
    return result.rows;
};
//GET ALL CSS RESOURCES
export async function getCSSResources(topic) {
    const result = await query(`SELECT * FROM resources WHERE topic=$1;`,[topic]);
    return result.rows;
};



