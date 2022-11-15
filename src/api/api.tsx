import axios from "axios";
import {ICountries} from '../Types/types'

export const api = {
  getCountries: async () => {
    const http = await axios.get('https://restcountries.com/v3.1/all');
    const countries:ICountries[] = [...http.data];
    return countries;
  },
};
