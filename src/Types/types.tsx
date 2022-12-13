export interface ICountries {
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  region: string;
  subregion: string;
  capital: string;
  population: number;
  flags: { png: string };
  tld: [];
  currencies: { [key: string]: any };
  languages: { [key: string]: any };
  borders: [];
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
