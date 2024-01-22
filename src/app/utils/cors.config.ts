import { CorsOptions } from "cors";

const whitelist = ["http://localhost:5173"];
export const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (
      (typeof origin === "string" && whitelist.indexOf(origin) !== -1) ||
      !origin
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
