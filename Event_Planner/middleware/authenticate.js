const jwt = require("jsonwebtoken");

const authenticate = (allowedRoles) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Authorization token required." });
        }
        const token = authHeader.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (!allowedRoles.includes(decoded.role)) {
                return res.status(403).json({ error: "Access forbidden: insufficient privileges." });
            }
            req.user = decoded;
            next();
        } catch (err) {
            if (err.name === 'JsonWebTokenError') {
                return res.status(401).json({ error: "Invalid token" });
            }
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ error: "Token expired" });
            }
            
            return res.status(401).json({ error: "Authentication failed" });
        }
    };
};

module.exports = authenticate;