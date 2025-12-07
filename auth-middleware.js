// Authentication Middleware
// Handles JWT token verification and user authentication

const jwt = require('jsonwebtoken');

/**
 * Verify JWT token middleware
 * @param {Object} options - Middleware configuration
 * @returns {Function} Express middleware
 */
function verifyToken(options = {}) {
  const {
    secret = process.env.JWT_SECRET,
    algorithms = ['HS256'],
    getToken = (req) => {
      // Extract token from Authorization header
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.substring(7);
      }
      // Or from cookie
      return req.cookies?.token;
    }
  } = options;

  return async (req, res, next) => {
    try {
      const token = getToken(req);

      if (!token) {
        return res.status(401).json({
          error: 'Unauthorized',
          message: 'No authentication token provided'
        });
      }

      // Verify token
      const decoded = jwt.verify(token, secret, { algorithms });

      // Attach user info to request
      req.user = decoded;
      req.userId = decoded.sub || decoded.id;

      next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({
          error: 'Unauthorized',
          message: 'Token has expired'
        });
      }

      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({
          error: 'Unauthorized',
          message: 'Invalid token'
        });
      }

      return res.status(500).json({
        error: 'Internal Server Error',
        message: 'Failed to authenticate token'
      });
    }
  };
}

/**
 * Optional authentication middleware
 * Attaches user if token is valid, but doesn't fail if missing
 */
function optionalAuth(options = {}) {
  const verify = verifyToken(options);

  return (req, res, next) => {
    verify(req, res, (err) => {
      // Continue even if authentication fails
      next();
    });
  };
}

/**
 * Require specific roles middleware
 * @param {Array<string>} roles - Required roles
 * @returns {Function} Express middleware
 */
function requireRoles(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Authentication required'
      });
    }

    const userRoles = req.user.roles || [];
    const hasRequiredRole = roles.some(role => userRoles.includes(role));

    if (!hasRequiredRole) {
      return res.status(403).json({
        error: 'Forbidden',
        message: 'Insufficient permissions'
      });
    }

    next();
  };
}

module.exports = {
  verifyToken,
  optionalAuth,
  requireRoles
};
