const router = require("express").Router();

const Fruit = require("./../models/Fruit.model");

const { validateFruit } = require("../error-handling/fruit-errors");

const { isAuthenticated } = require("./../middleware/jwt.middleware");

const roleValidation = require("../middleware/roleValidation");

//

router.get("/", (req, res, next) => {
  Fruit.find()
    .then((Fruit) => {
      res.json(Fruit);
    })
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  Fruit.findById(req.params.id)
    .then((Fruit) => {
      res.json(Fruit);
    })
    .catch((err) => next(err));
});

router.post(
  "/",
  validateFruit,
  isAuthenticated,
  roleValidation(["admin"]),
  (req, res, next) => {
    Fruit.create(req.body)
      .then((newProduct) => {
        res.json(newProduct);
      })
      .catch((err) => next(err));
  }
);


// without validation
/*
router.post(
  "/",
  validateFruit,
  (req, res, next) => {
    Fruit.create(req.body)
      .then((newProduct) => {
        res.json(newProduct);
      })
      .catch((err) => next(err));
  }
);
*/
router.put(
  "/:id",
  validateFruit,
  isAuthenticated,
  roleValidation(["admin"]),
  (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    console.log(req.params);
    Fruit.findByIdAndUpdate(id, req.body, { new: true })
      .then((updatedProduct) => {
        res.json(updatedProduct);
      })
      .catch((err) => next(err));
  }
);

router.delete(
  "/:id",
  isAuthenticated,
  roleValidation(["admin"]),
  (req, res, next) => {
    const { id } = req.params;
    Fruit.findByIdAndDelete(id)
      .then((deletedProduct) => {
        res.json(deletedProduct);
      })
      .catch((err) => next(err));
  }
);

module.exports = router;
