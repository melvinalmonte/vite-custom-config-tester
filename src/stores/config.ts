import { AppConfig } from "../config/types";
import { appConfig } from "../config";
import { proxy } from "valtio";

type Config = {
  config: Promise<AppConfig>;
};

const configStore = proxy<Config>({
  config: appConfig,
});

export { configStore };
