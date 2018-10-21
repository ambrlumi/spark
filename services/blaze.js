import axios from "react-native-axios";

import config from "./config";

const bi = axios.create({ baseURL: config.BLAZE_URL });

const check = img =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await bi.post("/check", { img });
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

const create = payload =>
  new Promise(async (resolve, reject) => {
    try {
      console.log({ payload });
      const { data } = await bi.post("/create", payload);
      resolve(data.data);
    } catch (e) {
      reject(e);
    }
  });

export default { check, create };
