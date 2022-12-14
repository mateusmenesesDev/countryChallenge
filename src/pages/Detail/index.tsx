import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../contexts/Context';
import { ICountries } from '../../Types/types';
import { BackBtn } from '../../components/BackBtn';

export function Detail() {
  const { theme } = useContext(Context);
  const body = document.querySelector('body');
  body?.setAttribute('style', `background-color:${theme.bg}`);
  const [country, setCountry] = useState<ICountries | null>(null);
  const { countryName } = useParams();
  async function getCountry() {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const country: ICountries = response.data[0];
    setCountry(country);
  }
  useEffect(() => {
    getCountry();
  }, [countryName]);
  function getNativeName() {
    if (country !== null) {
      const nativeNameKey = Object.keys(country.name.nativeName);
      return country.name.nativeName[nativeNameKey[0]].common;
    }
  }
  return (
    <main className={`mx-4 my-10 md:px-3 lg:px-36 ${theme.text}`}>
      <BackBtn />
      {country !== null && (
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-2 lg:place-items-center'>
          <div className='max-w-md lg:w-full'>
            <img
              src={country.flags.png}
              alt='country flag'
              className='w-full h-full'
            />
          </div>
          <div className=''>
            <div className='font-bold text-2xl mb-6'>{country.name.common}</div>
            <div className='grid md:grid-cols-2 gap-3'>
              <ul className='flex flex-col gap-2 mb-6'>
                <li>
                  <b>Native Name:</b> {getNativeName()}
                </li>
                <li>
                  <b>Population:</b> {country.population}
                </li>
                <li>
                  <b>Region:</b> {country.region}
                </li>
                <li>
                  <b>Sub Region:</b> {country.subregion}
                </li>
                <li>
                  <b>Capital:</b> {country.capital}
                </li>
              </ul>

              <ul className='flex flex-col gap-2 mb-6'>
                <li>
                  <b>Top Level Domain:</b> {country.tld}
                </li>
                <li>
                  <b>Currencies: </b>
                  {country.currencies[Object.keys(country.currencies)[0]].name}
                </li>
                <li>
                  <b>Languages:</b>
                  {Object.keys(country.languages).map(
                    (lang) => ` ${country.languages[lang]} `
                  )}
                </li>
              </ul>
            </div>
            {country.borders !== undefined && (
              <div className='font-semibold text-xl'>
                Border Countries:
                <ul className='flex gap-2 justify-center flex-wrap mt-3'>
                  {Object.values(country.borders).map((border) => (
                    <li
                      className={`${theme.elements} px-4 py-1 text-sm`}
                      key={border}
                    >
                      {border}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
