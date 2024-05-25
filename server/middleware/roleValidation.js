// middleware/roleValidation.js
const roleValidation = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.payload.role)) {
      return res.status(403).json({
        message:
          "Access forbidden: insufficient rights because the roles required are " +
          roles +
          " while the role in the payload is " +
          req.payload.role,
      });
    }
    next();
  };
};

module.exports = roleValidation;
