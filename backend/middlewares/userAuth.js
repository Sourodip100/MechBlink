const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.JWT_SECRET_KEY;
function setToken(res, userId){
    const token = jwt.sign({ userId: userId }, secretKey, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
}
function getToken(req){
    const token = req.cookies?.token;
    if (!token) return null;

    try {
        return jwt.verify(token, secretKey);
    }
    catch (err){
        console.error("Error verifying token:", err);
        return null;
    }
}
module.exports = { setToken, getToken };