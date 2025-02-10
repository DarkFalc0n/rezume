export interface PersonalInfo {
  /** Name */
  firstName: string;
  middleName?: string;
  lastName?: string;

  /** Country Code to be added as prefix to */
  countrycode: string;
  phone: string;

  /** Email Address */
  email: string;

  /** URLs */
  urls?: URL[];
}

interface URL {
  name: string;
  url: string;
}
