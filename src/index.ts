import { Bundle, HttpRequestOptions, ZObject } from "zapier-platform-core";
import { OrderTrigger, ProjectTrigger } from "./triggers";
import { OrderCreate } from "./creates";
import { version as platformVersion } from "zapier-platform-core";
const { version } = require("../package.json"); // eslint-disable-line

const addApiKeyHeader = (
  req: HttpRequestOptions,
  _z: ZObject,
  bundle: Bundle
): HttpRequestOptions => {
  req.headers ??= {};
  req.headers["Content-Type"] = "application/json";
  req.headers["Authorization"] = `Bearer ${bundle.authData.apiKey}`;
  return req;
};

export default {
  version, // eslint-disable-line
  platformVersion,
  beforeRequest: [addApiKeyHeader],
  authentication: {
    type: "custom",
    fields: [{ key: "apiKey", type: "string" }],
    test: async (z: ZObject): Promise<void> => {
      const response = await z.request("https://api.usepatch.com/v1/orders", {
        json: { page: 1 },
      });
      if (response.status !== 200) {
        throw new Error("Invalid API Key");
      }
    },
  },

  triggers: {
    [ProjectTrigger.key]: ProjectTrigger,
    [OrderTrigger.key]: OrderTrigger,
  },

  creates: {
    [OrderCreate.key]: OrderCreate,
  },
};
