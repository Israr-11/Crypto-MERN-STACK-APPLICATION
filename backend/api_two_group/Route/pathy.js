const router = require("express").Router();
const controlMe = require("../Controller/controlMe");

router.get("/", controlMe.getting_all_the_data);
router.post("/:id", controlMe.posting_data_to_DB);

module.exports = router;
