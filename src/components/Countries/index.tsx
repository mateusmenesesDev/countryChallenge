import React, { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { ICountries, Theme } from '../../Types/types';
import { Country } from './Country';
import { Filter } from './Filter';
import { Input } from './Input';

export function Countries({ theme }: Theme) {
  const [countries, setCountries] = useState<ICountries[] | []>([]);
  const [countryName, setCountryName] = useState<string>();
  const [region, setRegion] = useState<string>('vazio');

  async function getCountries() {
    if (countryName) {
      const request: any = await api.getCountries(countryName);
      setCountries(request);
      return request;
    }
    const request: any = await api.getCountries();
    setCountries(request);
    return request;
  }

  async function getCountryName(event: React.ChangeEvent<HTMLInputElement>) {
    setCountryName(event.target.value);
  }

  function getRegion(event: React.ChangeEvent<HTMLSelectElement>) {
    setRegion(event.target.value);
  }

  useEffect(() => {
    getCountries();
  }, [countryName]);

  return (
    <section className=''>
      <div className='my-12 w-full px-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between lg:px-36'>
        <Input theme={theme} getCountryName={getCountryName} />
        <Filter
          themeElementBg={theme.elements}
          getRegion={getRegion}
          region={region}
        />
      </div>
      <div className='flex flex-wrap gap-x-4 gap-y-8 lg:px-36'>
        {region !== 'vazio'
          ? countries
              .filter((countryRegion) => countryRegion.region === region)
              .map((country) => (
                <Country
                  country={country}
                  themeElementBg={theme.elements}
                  key={country.name.official}
                />
              ))
          : countries.map((country) => (
              <Country
                country={country}
                themeElementBg={theme.elements}
                key={country.name.official}
              />
            ))}
      </div>
    </section>
  );
}
