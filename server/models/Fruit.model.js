const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    taste: {
        type: String,
        enum: ['Sweet', 'Sour'],
        required: true
    },    season: { type: String, required: true },
    origin: { type: String, required: true },
    nutritional_values: {
        calories: { type: Number, required: true },
        sugar: { type: Number, required: true },
        fiber: { type: Number, required: true },
        vitamins: {
            vitaminC: { type: String },
            vitaminA: { type: String },
            vitaminK: { type: String },
            vitaminB6: { type: String }
        },
        minerals: {
            potassium: { type: String },
            calcium: { type: String },
            iron: { type: String },
            copper: { type: String },
            manganese: { type: String },
            magnesium: { type: String }
        }
    },
    average_weight: { type: Number, required: true },
    price_per_kg: { type: Number, required: true },
    image_url: { type: String, required: true },
    availability: {
        type: String,
        enum: ['Year-round', 'Seasonal'],
        required: true
    },
    family: { type: String, required: true },
    varieties: { type: [String], required: true },
    uses: {
        type: [String],
        enum: ['eaten raw', 'used in desserts', 'juiced', 'cooked', 'used in smoothies', 'used in salads', 'used in jams', 'used in cooking', 'canned', 'dried as prunes', 'dried'],
        required: true
    },
    description: { type: String, required: true },
    cultivation_tips: { type: String, required: true }
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
