const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('./constant');

function isValidMobileNumber(number) {
    const mobileNumberPattern = /^\d{10}$/;
    return mobileNumberPattern.test(number);
}

function isPasswordValid(password) {
    return password.length >= 6;
}

function generateHashedPassword(password) {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

const generateAccessToken = async (user) => {

    const payload = {
        userId: user?._id,
        name: user?.name,
        email: user?.email
    };
    return jwt.sign(payload, JWT_SECRET_KEY);
};


// verify access token middleware
const verifyAccssToken = async (req, res, next) => {
    try {

        const accessToken = req.headers.authorization;

        if (accessToken) {
            jwt.verify(accessToken, JWT_SECRET_KEY, (err, user) => {
                if (err) {
                    res.status(401).json({
                        success: false,
                        message: "Token is either expired."
                    })
                }
                req.user = user;
                next();
            })
        }
        else {
            res.status(401).json({
                success: false,
                message: "Token not found, do attach in headers authorization"
            })
        }


    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}

module.exports = {
    generateHashedPassword,
    isPasswordValid,
    isValidMobileNumber,
    generateAccessToken,
    verifyAccssToken
}