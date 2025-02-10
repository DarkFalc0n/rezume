export interface Project {
  /**Project name */
  name: string;

  /**Project date */
  date: Date;

  /**Project description */
  description: string | string[];

  /**Project technologies */
  technologies: string[];

  /**Project link */
  link: string;
}
