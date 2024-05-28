module.exports = (app) => {
  app.use((req, res, next) => {
    // this middleware runs whenever requested page is not available
    res.status(404).json({ message: "This route does not exist" });
  });

  app.use((err, req, res, next) => {
    // whenever you call next(err), this middleware will handle the error
    // always logs the error
    console.error("ERROR MESSAGE FROM MY MIDDLEWARE");
    console.error("THIS IS THE REQUEST METHOD", req.method);
    console.error("THIS IS THE PATH", req.path);
    console.error("THIS IS THE ERROR MESSAGE", err.message);
    console.error("THIS IS THE ERROR CODE", err.code);
    console.error("THIS IS THE RESPONSE", res);
    console.error("THIS IS THE RESPONSE, HEADERS SENT", res.headersSent);

    // only render if the error ocurred before sending the response
    if (!res.headersSent) {
      if (err.message == "No authorization token was found") {
        res.status(401).json({
          message: "No authorization token was found",
        });
        return;
      }
      res.status(500).json({
        message: `Internal server error. Check the server console => ${e.message}`,
      });
    }
  });
};
