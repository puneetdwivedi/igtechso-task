const { verifyAccssToken } = require("../../helpers/utils");
const upload = require("../../middleware/uploadSingleImage");
const createReview = require("../controllers/review/create");
const deleteReview = require("../controllers/review/delete");
const { getSpecificReveiw, getAllReivew } = require("../controllers/review/read");
const updateReview = require("../controllers/review/update");

const router = require("express").Router();


router.post("/create", verifyAccssToken, upload.single("image"), createReview);
router.put("/update/:reveiwId", verifyAccssToken, upload.single("image"), updateReview);
router.delete("/delete/:reveiwId", verifyAccssToken, deleteReview)
router.get("/get/:reveiwId", getSpecificReveiw)
router.get("/get-all", getAllReivew);


module.exports = router;