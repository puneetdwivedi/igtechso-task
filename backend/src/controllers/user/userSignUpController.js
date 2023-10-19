const { isValidMobileNumber, isPasswordValid, generateHashedPassword } = require("../../../helpers/utils");
const userModel = require("../../models/userModel");

const userSignUpController = async (req, res) => {
    try {
        console.log(req.body);
        const { name = "", email = "", password = "", phone = "" } = req.body;

        if (!name || !email || !password || !phone) {
            return res.status(400).json({
                message: "name,email, password, phone is required fields"
            })
        }

        if (!isValidMobileNumber(phone)) {
            return res.status(400).json({
                message: "Phone Number should be of length 10"
            })
        }

        if (!isPasswordValid(password)) {
            return res.status(400).json({
                message: "Password should be of atleast length 6."
            })
        }

        // unique email check
        const uniqueEmailCheck = await userModel.findOne({ email });
        if (uniqueEmailCheck) {
            return res.status(400).json({
                message: "Email already registered"
            })
        }

        const uniquePhoneCheck = await userModel.findOne({ phone });
        if (uniquePhoneCheck) {
            return res.status(400).json({
                message: "Phone already registered"
            })
        }




        const hashedPassword = generateHashedPassword(password);
        console.log(hashedPassword);

        const createdUser = await userModel.create({
            name,
            email,
            phone,
            password: hashedPassword
        })

        return res.status(200).json({
            message: "User Registered SuccessFully",
        })



    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}


module.exports = userSignUpController;