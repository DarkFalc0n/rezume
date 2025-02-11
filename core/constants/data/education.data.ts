import type { Education } from "../../types";

export const educationData: Education[] = [
  {
    school: "Jalpaiguri Government Engineering College (Autonomous)",
    degree: "Bachelor of Technology in Information Technology",
    startDate: new Date(Date.UTC(2021, 7, 1)),
    endDate: new Date(Date.UTC(2025, 6, 1)),
    gradeType: "CGPA",
    grade: "8.75",
    location: "Jalpaiguri, India",
  },
  {
    school: "Army Public School, Barrackpore",
    degree: "Senior Secondary",
    startDate: new Date(Date.UTC(2018, 4, 1)),
    endDate: new Date(Date.UTC(2020, 3, 31)),
    gradeType: "Percentage",
    grade: "94",
    location: "Barrackpore, India",
  },
];
