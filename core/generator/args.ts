import { program } from "commander";
import fs from "fs";
import path from "path";

const currentDirectory = __dirname;
const defaultTemplateDirectory = fs.readFileSync(
  path.join(currentDirectory, "..", "..", "templates", "modern.tex.ejs"),
  "utf-8"
);
const defaultOutputDirectory = path.join(
  currentDirectory,
  "..",
  "..",
  "dist",
  "resume.tex"
);

const args = program
  .option(
    "-t, --template <template>",
    "Path to the template file for generating resume"
  )
  .option(
    "-o, --output <output>",
    "Path to the output file for saving the generated resume"
  )
  .parse(process.argv)
  .opts();

args.template = args.template || defaultTemplateDirectory;
args.output = args.output || defaultOutputDirectory;

export { args };
