export interface Experience {
  /**Name of organisation */
  organisation: string;

  /** Position*/
  position: string;

  /** Date of starting*/
  startDate: Date;

  /** Date of ending (not required for present education)*/
  endDate?: Date;

  /** Description */
  description?: string | string[];

  /** Location*/
  location?: string;
}
