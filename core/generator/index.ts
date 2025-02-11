import fs from "fs";
import ejs from "ejs";
import {
  achievements,
  educationData,
  experiences,
  personalData,
  projects,
  skills,
} from "../constants/data";

export function generate() {
  
  
  const template = fs.readFileSync("/home/darkfalcon/Projects/my-resume-gen/templates/modern.tex.ejs", "utf-8");

  const data = {
    achievements,
    educationData,
    experiences,
    skills,
    projects,
    personalData,
  };

  const rendered = ejs.render(template, data);

  fs.writeFileSync("resume.tex", rendered);
}
