const express = require("express");
const next = require("next");
const { type } = require("os");
const nextBuild = require("next/dist/build").default;
const path = require("path");

const app = express();

if (typeof PhusionPassenger !== "undefined") {
  PhusionPassenger.configure({ autoInstall: false });
}

const PORT = process.env.PORT || (typeof PhusionPassenger !== "undefined" ? "passenger" : 3000);

const start = async () => {
  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      console.log(`Next.js is now building...`);
      // @ts-expect-error
      await nextBuild(path.join(__dirname, ".."));
      process.exit();
    });

    return;
  }
  const nextApp = next({
    dev: process.env.NODE_ENV !== "production",
  });

  const nextHandler = nextApp.getRequestHandler();

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    console.log("Next.js started");

    app.listen(PORT, async () => {
      console.log(`Next.js App is in ${process.env.NODE_ENV} mode`);
      console.log(`Next.js App is running on port ${PORT}`);
      console.log(`Next.js App URL: ${process.env.NEXT_SERVER_URL}`);
    });
  });
};

start();
