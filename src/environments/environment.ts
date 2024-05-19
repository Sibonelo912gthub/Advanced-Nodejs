import { DevEnvironment } from "./environment.dev";
import { prodEnvironment } from "./environment.prod";

export interface Environment {
  db_uri: string;
}

export function getEnvVariables() {
  if (process.env.NODE_ENV === "production") {
    return prodEnvironment;
  }
  return DevEnvironment;
}
