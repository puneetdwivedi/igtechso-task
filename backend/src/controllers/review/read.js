const reviewModel = require("../../models/reviewModel")

const getSpecificReveiw = async (req, res) => {
    try {
        const reveiwId = req.params.reveiwId

        const requiredReview = await reviewModel.findOne({
            _id: reveiwId
        })

        if (requiredReview) {
            return res.status(200).json({
                data: requiredReview
            })
        }
        else {
            return res.status(404).json({
                message: "No review found with given id"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}

const getAllReivew = async (req, res) => {
    try {

        const reviews = await reviewModel.find();

        return res.status(200).json({
            reviews
        })

    } catch (err) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}

module.exports = {
    getAllReivew,
    getSpecificReveiw
}