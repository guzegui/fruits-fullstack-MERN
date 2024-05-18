const validateFruit = (req, res, next) => {
  const {
    name,
    color,
    taste,
    season,
    origin,
    nutritional_values,
    average_weight,
    price_per_kg,
    image_url,
    availability,
    family,
    varieties,
    uses,
    description,
    cultivation_tips,
  } = req.body;

  const requiredFields = [
    "name",
    "color",
    "taste",
    "season",
    "origin",
    "nutritional_values",
    "average_weight",
    "price_per_kg",
    "image_url",
    "availability",
    "family",
    "varieties",
    "uses",
    "description",
    "cultivation_tips",
  ];
  const tasteOptions = ["Sweet", "Sour"];

  const availabilityOptions = ["Year-round", "Seasonal"];

  const usesOptions = [
    "eaten raw",
    "used in desserts",
    "juiced",
    "cooked",
    "used in smoothies",
    "used in salads",
    "used in jams",
    "used in cooking",
    "canned",
    "dried as prunes",
    "dried",
  ];

  for (let field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json(`Fruit is missing required field: ${field}.`);
    }
  }

  if (typeof average_weight !== "number" || average_weight <= 0) {
    return res.status(400).json("Fruit average weight is not valid.");
  }

  if (typeof price_per_kg !== "number" || price_per_kg < 0) {
    return res.status(400).json("Fruit price per kg is not valid.");
  }

  if (!tasteOptions.includes(taste)) {
    return res.status(400).json("Fruit taste is not valid.");
  }
  if (!availabilityOptions.includes(availability)) {
    return res.status(400).json("Fruit availability is not valid.");
  }

  if (!Array.isArray(varieties) || varieties.length === 0) {
    return res.status(400).json("Fruit varieties must be a non-empty array.");
  }

  if (!Array.isArray(uses) || uses.some((use) => !usesOptions.includes(use))) {
    return res.status(400).json("Fruit uses are not valid.");
  }

  // Optional fields validation (for nested structure)
  if (nutritional_values) {
    const { calories, sugar, fiber, vitamins, minerals } = nutritional_values;

    if (typeof calories !== "number" || calories < 0) {
      return res
        .status(400)
        .json("Fruit nutritional value calories is not valid.");
    }

    if (typeof sugar !== "number" || sugar < 0) {
      return res
        .status(400)
        .json("Fruit nutritional value sugar is not valid.");
    }

    if (typeof fiber !== "number" || fiber < 0) {
      return res
        .status(400)
        .json("Fruit nutritional value fiber is not valid.");
    }

    const vitaminFields = ["vitaminC", "vitaminA", "vitaminK", "vitaminB6"];
    for (let vitamin of vitaminFields) {
      if (
        vitamins &&
        vitamins[vitamin] &&
        typeof vitamins[vitamin] !== "string"
      ) {
        return res.status(400).json(`Fruit vitamin ${vitamin} is not valid.`);
      }
    }

    const mineralFields = [
      "potassium",
      "calcium",
      "iron",
      "copper",
      "manganese",
      "magnesium",
    ];
    for (let mineral of mineralFields) {
      if (
        minerals &&
        minerals[mineral] &&
        typeof minerals[mineral] !== "string"
      ) {
        return res.status(400).json(`Fruit mineral ${mineral} is not valid.`);
      }
    }
  }

  next();
};

module.exports = {
  validateFruit,
};
