const jwt = require('jsonwebtoken')
const tokenSecret = "my-token-secret"

exports.blackListTokens=[];
exports.verify = (req, res, next) => {
    const token = req.headers.authorization
    if (!token||this.blackListTokens.find(token)) res.status(403).json({error: "please provide a valid token"})
    else {
        jwt.verify(token.split(" ")[1], tokenSecret, (err, value) => {
            if (err) res.status(500).json({error: 'failed to authenticate token'})
            req.user = value.data
            next()
        })
    }
}
