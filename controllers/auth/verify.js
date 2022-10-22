const {User} = require("../../models/users");

const {RequestError} = require("../../helpers")

const verify = async(req, res)=> {
    const {verificationToken} = req.params;
    const user = await User.findOne({verificationToken});
    if(!user) {
        throw RequestError(404);
    }
    await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: ""});
    res.json({
        message: "Email verified successfully"
    })
}

module.exports = verify;