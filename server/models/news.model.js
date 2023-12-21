const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
    headline: {
        type: String,
        required: [true, "News must have a headline"],
        minlength: 6,
    },
    abstract: {
        type: String,
        required: [true, "News must have an abstract"],
        minlength: 15,
    },
    source: {
        publisher: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
}, { timestamps: true });

const News = mongoose.model("News", NewsSchema);

module.exports = News;
