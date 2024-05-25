const router = require("express").Router();

const User = require("./../models/User.model");

const { isAuthenticated } = require("./../middleware/jwt.middleware");

const roleValidation = require("../middleware/roleValidation");

router.get(
  "/",
  isAuthenticated,
  roleValidation(["admin"]),
  async (req, res, next) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  "/:id",
  isAuthenticated,
  roleValidation(["admin"]),
  async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/",
  isAuthenticated,
  roleValidation(["admin"]),
  async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:id",
  isAuthenticated,
  roleValidation(["admin"]),
  async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
);
router.patch(
  "/assign-role/:id",
  isAuthenticated,
  roleValidation(["admin"]),
  async (req, res, next) => {
    const { role } = req.body;
    if (!["user", "admin", "vendor"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { role },
        {
          new: true,
        }
      );
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
