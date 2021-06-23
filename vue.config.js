const mockdata = require("./public/mock/index.json");
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    before(app) {
      app.get("/home/info", (req, res, next) => {
        res.json(mockdata);
      });
    },
  },
};
