const reviewModel = require("../../models/reviewModel");

const createReview = async (req, res) => {

    try {

        const { stars, title, watched } = req.body;

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

        await reviewModel.create({
            stars,
            title,
            watched,
            userId,
            image: req.file.path
        })

        return res.status(200).json({
            message: "Review Recorded"
        })

    } catch (err) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }

}

module.exports = createReview;