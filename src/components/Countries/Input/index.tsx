import { useContext } from 'react';
import { Context } from '../../../contexts/Context';

interface Props {
  getCountryName: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export function Input({ getCountryName }: Props) {
  const { theme } = useContext(Context);
  return (
    <div
      className={`${theme.elements} flex items-center rounded-md shadow-md lg:w-96`}
    >
      <i className='fa-solid fa-magnifying-glass ml-3'></i>
      <input
        type='text'
        placeholder='Search for a country'
        className={`${theme.elements} ${theme.inputPlaceholder} px-4 py-5 outline-none rounded-md w-full`}
        onChange={getCountryName}
      />
    </div>
  );
}
