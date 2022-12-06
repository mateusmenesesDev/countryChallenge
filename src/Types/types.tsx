export interface ICountries {
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  region: string;
  capital: string;
  population: number;
  flags: { png: string };
}

export interface Theme {
  theme: {
    bg: string;
    elements: string;
    text: string;
    inputPlaceholder: string;
    themeIcon: string;
  };
}
