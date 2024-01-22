import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

const main = async () => {
  try {
    await mongoose.connect(config.dbUri as string);
    console.log("DB connected");
    app.listen(config.port, () => {
      console.log("Listening from port", config.port);
    });
  } catch (error) {
    console.log(error);
  }
};

main();