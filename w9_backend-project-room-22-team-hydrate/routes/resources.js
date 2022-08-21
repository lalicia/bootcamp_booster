import express from 'express';
//import resources from '../libs/resources.js';
import { getResources, getCSSResources} from '../models/resources.js';
const resourcesRoute = express.Router();


resourcesRoute.get('/', async function (req, res){
    console.log(req.query)
    if(req.query){
        let cssQuery = await getCSSResources(req.query) 
    }
    let allResources =  await getResources ()
    console.log(allResources)
    
    const resourcesObject = {
    success: Boolean, 
    payload: allResources
};

res.json(resourcesObject);
})

resourcesRoute.get("/:id", async function(req, res) {
    const resourcesID = req.params.id;
    console.log(resourcesID)
    let resources = await getCSSResources (resourcesID)
                        
            const resourcesIdObject = {
            success: true,
            payload: resources,
        }

        res.json(resourcesIdObject);  
    })



export default resourcesRoute;






