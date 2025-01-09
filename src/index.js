const express = require("express");
const { ServerConfig, Logger } = require("./config");
const app = require("./utilites");

app.listen(ServerConfig.PORT, () => {
  console.log(`server running on the :${ServerConfig.PORT}`);
  Logger.info("Successfully started server", {});
});
