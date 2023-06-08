const jwt = require('jsonwebtoken');


function generateToken(userId, secretKey) {
    const token = jwt.sign({userId}, secretKey);
    return token;
}

module.exports = generateToken;


function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({error: 'Unauthorized'});
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({error: 'Unauthorized'});
        }

        req.userId = decoded.userId;
        next();
    });
}

module.exports = authenticate;