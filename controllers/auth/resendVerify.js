const {User} = require("../../models/users")

const {RequestError, sendEmail, verifyEmail} = require("../../helpers")

const resendVerify = async(req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        throw RequestError(400, "Email not found")
    }
    
    const mail = verifyEmail(email, user.verificationToken);
    await sendEmail(mail);

    res.json({
        message: "Verify email sent"
    })
}

module.exports = resendVerify;