const bcrypt = require('bcryptjs');
const userModel = require("../../models/userModel");
const { generateAccessToken } = require('../../../helpers/utils');

const userLogInController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "login credentials are missing"
            })
        }

        const requiredUser = await userModel.findOne({
            email
        })

        if (!requiredUser) {
            return res.status(404).json({
                message: "No user registed with given email"
            })
        }

        const passwordMatch = bcrypt.compareSync(password, requiredUser.password);

        if (passwordMatch) {

            const accessToken = await generateAccessToken(requiredUser);

            return res.status(200).json({
                message: "loggedInSuccessFully",
                accessToken
            })

        }
        else {
            return res.status(401).json({
                message: "Password do not match"
            })
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}

module.exports = userLogInController;