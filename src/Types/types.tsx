export interface ICountries {
  name: {
    common: string;
    official: string;
  },
  region: string,
  capital: string,
  population: number,
  flags: {png: string},
}
