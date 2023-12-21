const News = require("../models/news.model");

module.exports.create = (req, res) => {
    News.create(req.body)
        .then(news => res.json(news))
        .catch(err => res.status(400).json(err));
};

module.exports.getAll = (_, res) => {
    News.find()
        .then(allNews => res.json(allNews))
        .catch(err => res.status(400).json(err));
};

module.exports.getById = (req, res) => {
    News.findOne({ _id: req.params.id })
        .then(news => res.json(news))
        .catch(err => res.status(404).json(err));
};

module.exports.update = (req, res) => {
    News.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(news => res.json(news))
        .catch(err => res.status(400).json(err));
};

module.exports.delete = (req, res) => {
    News.findOneAndDelete({ _id: req.params.id })
        .then(deletedNews => res.json(deletedNews))
        .catch(err => res.status(400).json(err));
};
