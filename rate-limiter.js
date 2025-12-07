// API Rate Limiting Middleware
// Implements rate limiting for API endpoints

const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');

/**
 * Create a rate limiter middleware
 * @param {Object} options - Rate limiter configuration
 * @returns {Function} Express middleware
 */
function createRateLimiter(options = {}) {
  const {
    windowMs = 15 * 60 * 1000, // 15 minutes
    max = 100, // Limit each IP to 100 requests per windowMs
    message = 'Too many requests, please try again later.',
    standardHeaders = true,
    legacyHeaders = false,
    store = null, // Optional Redis store
    skipSuccessfulRequests = false,
    skipFailedRequests = false
  } = options;

  const limiterConfig = {
    windowMs,
    max,
    message,
    standardHeaders, // Return rate limit info in RateLimit-* headers
    legacyHeaders, // Disable X-RateLimit-* headers
    skipSuccessfulRequests,
    skipFailedRequests,
    handler: (req, res) => {
      res.status(429).json({
        error: 'Too Many Requests',
        message,
        retryAfter: res.getHeader('Retry-After')
      });
    }
  };

  if (store) {
    limiterConfig.store = store;
  }

  return rateLimit(limiterConfig);
}

/**
 * Create a Redis-backed rate limiter
 * @param {Object} redisClient - Redis client instance
 * @param {Object} options - Rate limiter options
 * @returns {Function} Express middleware
 */
function createRedisRateLimiter(redisClient, options = {}) {
  const store = new RedisStore({
    client: redisClient,
    prefix: 'rate_limit:',
    sendCommand: (...args) => redisClient.call(...args)
  });

  return createRateLimiter({ ...options, store });
}

/**
 * Different rate limiters for different endpoint types
 */
const rateLimiters = {
  // Strict rate limit for authentication endpoints
  auth: createRateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many authentication attempts, please try again later.'
  }),

  // Standard rate limit for general API
  api: createRateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100
  }),

  // Relaxed rate limit for read-only endpoints
  readOnly: createRateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 300
  })
};

module.exports = {
  createRateLimiter,
  createRedisRateLimiter,
  rateLimiters
};
