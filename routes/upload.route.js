


const uploadcontroller = require("../controllers/upload.controller");

let routes = (app) => {
  app.post("/upload-file", uploadcontroller.uploadFile)

  app.get("/files", uploadcontroller.getFilesList)

  app.get("/files/:name", uploadcontroller.downloadFiles)

};

module.exports = routes;
