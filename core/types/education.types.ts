export interface Education {
  /**Name of school */
  school: string;

  /** Degree Name (include major/field)*/
  degree: string;

  /** Date of starting*/
  startDate: Date;

  /** Date of ending (not required for present education)*/
  endDate?: Date;

  // TODO: Add support for multiple types of grading systems
  /** GPA or Percentage*/
  gradeType?: string;

  /** Grade */
  grade?: string;

  /** Location*/
  location: string;
}
