export interface PersonalInfo {
  /** Name */
  firstName: string;
  middleName?: string;
  lastName?: string;

  /** TimeZone */
  timeZone?: string;

  /** Email Address */
  email: string;

  /** URLs */
  urls?: URL[];
}

interface URL {
  name: string;
  url: string;
}
