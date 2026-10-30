function setToken(res, token){
    res.cookie("token", token, { httpOnly: true });
}
function getToken(req){
    return req.cookies.token;
}
module.exports = { setToken, getToken };