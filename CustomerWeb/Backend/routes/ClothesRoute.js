import { Router } from "express"
import Items from "../model/Items.js"

const router = Router()

router.get("/getClothes", async (req, res) => {
    const Item = await Items.find({}).limit(10)
    res.status(200).json(Item)
})

/* Search AutoComplete Feature */
router.get("/autocomplete/:query", async (req, res) => {
    console.log("Autocomplete route");
    const agg = [
        {
            $search:
            {
                index: "autocomplete",
                autocomplete: {
                    query: req.params.query,
                    path: "ItemName"
                }
            }
        },
        {
            $project: {
                ItemName: 1,
            }
        },
        { 
            $limit: 10 
        },
    ];
    const items = await Items.aggregate(agg);
    res.status(200).json(items)
})

/* Search items based on query */
router.get("/search/:query", async (req, res) => {
    console.log("Search route");
    let query = req.params.query;
    let agg = [
        {
            $search:
            {
                index: "ItemsSearch",
                text: {
                    query: query,
                    path: {
                        wildcard: "*"
                    }
                }
            }
        }, 
        {
            $project: {
                embedding: 0
            }
        },
        { 
            $limit: 10 
        }
    ]
    const items = await Items.aggregate(agg).limit(10);
    res.send(items);
})

export default router