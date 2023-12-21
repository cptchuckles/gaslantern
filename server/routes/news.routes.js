const NewsController = require("../controllers/news.controller");

module.exports = (app) => {
    app.get("/api/news", NewsController.getAll);
    app.get("/api/news/:id", NewsController.getById);
    app.post("/api/news", NewsController.create);
    app.patch("/api/news/:id", NewsController.update);
    app.delete("/api/news/:id", NewsController.delete);
};
