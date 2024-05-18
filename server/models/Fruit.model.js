const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String},
    taste: {
        type: String,
        enum: ['Sweet', 'Sour'],
        required: true
    },    season: { type: String},
    origin: { type: String},
    nutritional_values: {
        calories: { type: Number},
        sugar: { type: Number},
        fiber: { type: Number},
        vitamins: {
            vitaminC: { type: Number },
            vitaminA: { type: Number },
            vitaminK: { type: Number },
            vitaminB6: { type: Number }
        },
        minerals: {
            potassium: { type: Number },
            calcium: { type: Number },
            iron: { type: Number },
            copper: { type: Number },
            manganese: { type: Number },
            magnesium: { type: Number }
        }
    },
    average_weight: { type: Number},
    price_per_kg: { type: Number},
    image_url: { type: String},
    availability: {
        type: String,
        enum: ['Year-round', 'Seasonal'],
        required: true
    },
    family: { type: String},
    varieties: { type: [String]},
    uses: {
        type: [String],
        enum: ['eaten raw', 'used in desserts', 'juiced', 'cooked', 'used in smoothies', 'used in salads', 'used in jams', 'used in cooking', 'canned', 'dried as prunes', 'dried'],
        required: true
    },
    description: { type: String},
    cultivation_tips: { type: String}
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
