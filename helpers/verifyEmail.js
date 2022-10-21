const {BASE_URL} = process.env;

const verifyEmail = (email, verificationToken) => {
    const mail =  {
        to: email,
        subject: "Submit register",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click for submit</a>`
    };

    return mail;
}

module.exports = verifyEmail;