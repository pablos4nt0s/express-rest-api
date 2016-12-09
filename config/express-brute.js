import ExpressBrute from 'express-brute';

const store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production

// No more than 1000 login attempts per day per IP
exports.loginRateLimit = function loginRateLimit() {
  return new ExpressBrute(store, {
    freeRetries: 1000,
    attachResetToRequest: false,
    refreshTimeoutOnRequest: false,
    minWait: 25 * 60 * 60 * 1000, // 1 day 1 hour (should never reach this wait time)
    maxWait: 25 * 60 * 60 * 1000, // 1 day 1 hour (should never reach this wait time)
    lifetime: 24 * 60 * 60 // 1 day (seconds not milliseconds)
  });
};

// Start slowing requests after 5 failed attempts to do something for the same user
exports.userRateLimit = function userRateLimit() {
  return new ExpressBrute(store, {
    freeRetries: 5,
    minWait: 5 * 60 * 1000, // 5 minutes
    maxWait: 60 * 60 * 1000 // 1 hour
  });
};
