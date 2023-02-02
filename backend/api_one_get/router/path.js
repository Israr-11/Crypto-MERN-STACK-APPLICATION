const control=require("../controller/control")
const router = require('express').Router();

router.get("/", control.getting_all_the_data)
router.post("/",control.posting_data_to_DB)

module.exports=router;



