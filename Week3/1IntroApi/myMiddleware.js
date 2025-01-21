//Middleware is just a function that runs in response to a request.
const apiKeyMiddleware = (req, res, next) => {
  //req and res are the same
  //next is a callbackfuction that will automatically be
  //set to the the next function in the request cycle
  //console.log(req.header);
  //This middleware is going to look for an apikey in the headers object
  const apiKey = req.header("x-api-key");
  //We can check if the provided key matches some value
  if (apiKey !== "1234") {
    //return 401 - HTTP code for unauthorized response
    return res.status(401).json({ error: "Invalid API Key" });
  }
  //we know they provided a valid key
  //call the next function in the chain
  next();
};

//Export the function
module.exports = apiKeyMiddleware;
