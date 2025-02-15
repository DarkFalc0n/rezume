import fse from "fs-extra";
import ejs from "ejs";
import {args} from "./args";
import {
  achievements,
  educationData,
  experiences,
  personalData,
  projects,
  skills,
} from "../constants/data";

export function generate() {

  const data = {
    achievements,
    educationData,
    experiences,
    skills,
    projects,
    personalData,
  };

  const renderedFile = ejs.render(args.template, data);

  fse.outputFileSync(args.output, renderedFile);
}
