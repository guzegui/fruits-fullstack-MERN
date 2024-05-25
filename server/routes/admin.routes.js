// routes/admin.routes.js
const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/jwt.middleware");
const roleValidation = require("../middleware/roleValidation");

// Example of a protected route for admins
router.post(
  "/assign-role",
  isAuthenticated,
  roleValidation(["admin"]),
  (req, res) => {
    res.json({
      message: "You are an admin",
    });
  }
);

module.exports = router;
