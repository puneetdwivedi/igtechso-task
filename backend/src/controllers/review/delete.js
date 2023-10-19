const reviewModel = require("../../models/reviewModel")

const deleteReview = async (req, res) => {
    try {
        const reveiwId = req.params.reveiwId

        const requiredReview = await reviewModel.findOne({
            userId: req.user?.userId,
            _id: reveiwId
        })

        if (requiredReview) {
            await reviewModel.deleteOne({
                userId: req.user?.userId,
                _id: reveiwId
            })

            return res.status(200).json({
                message:"review Delted succefully"
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

module.exports = deleteReview;