const reviewModel = require("../../models/reviewModel");

const updateReview = async (req, res) => {

    try {

        const { stars, title, watched } = req.body;
        const reveiwId = req.params.reveiwId

        if (!stars || !title || !watched) {
            return res.status(400).json({
                message: "Stars, title, watched is required fields"
            })
        }

        if (!(stars >= 0 && stars <= 5)) {
            return res.status(400).json({
                message: "Stars should be in between 0 to 5"
            })
        }
        const userId = req.user.userId;

        const requiredReview = await reviewModel.findOne({
            userId,
            _id: reveiwId
        })

        if (requiredReview) {

            await reviewModel.findByIdAndUpdate(requiredReview._id, {
                stars,
                title,
                watched,
                image: req.file.path
            })

            return res.status(200).json({
                message: "Review Updated SuccessFully"
            })

        }
        else {
            return res.status(404).json({
                message: "No review found with given id for loggin user"
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }

}

module.exports = updateReview;