const rateLimit = () => {
  // Configuration constants
  const LIMIT = 100; // Maximum number of requests allowed within the time window
  const WINDOW_MS = 15 * 60 * 1000; // Time window: 15 minutes in milliseconds

  // Object to store request data for each IP address
  const requests = {};

  // Return the middleware function
  return (req, res, next) => {
    const ip = req.ip; // Get the IP address of the client
    const now = Date.now(); // Get the current timestamp

    if (ip in requests) {
      // If this IP has made requests before
      const { count, startTime } = requests[ip];

      if (now - startTime > WINDOW_MS) {
        // If the time window has expired, reset the count for this IP
        requests[ip] = { count: 1, startTime: now };
      } else if (count >= LIMIT) {
        // If the request limit has been reached within the time window
        return res
          .status(429)
          .json({ error: "Too many requests, please try again later." });
      } else {
        // If within the time window and below the limit, increment the count
        requests[ip] = { count: count + 1, startTime };
      }
    } else {
      // If this is the first request from this IP, initialize its record
      requests[ip] = { count: 1, startTime: now };
    }

    // If the request is allowed, pass control to the next middleware
    next();
  };
};

module.exports = rateLimit;
