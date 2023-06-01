import axios from "axios";
import { defineConfig } from "../defineConfig";

export async function createGlobalConfig() {
  const { data: config } = await axios("/config/global.json");

  return defineConfig(config);
}
