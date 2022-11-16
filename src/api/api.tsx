import axios from "axios";
import {ICountries} from '../Types/types'

export const api = {
  getCountries: async (name?:string) => {
    if (name) {
      try{ 
        const http = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        const countries:any = [...http.data];
        return countries;
      } catch {
        return []
      }
    } else {
      const http = await axios.get('https://restcountries.com/v3.1/all');
      const countries:ICountries[] = [...http.data];
      return countries;
    }
  }
}