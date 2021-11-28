import path from "path";
import { readdir } from "fs/promises";

export const getImageNames = () =>
  readdir(path.resolve(process.cwd(), "src/public/cat/images"));
