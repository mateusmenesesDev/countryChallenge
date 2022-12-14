import React, { createContext, useState } from 'react';
import { Theme } from '../Types/types';
import { themes } from '../utils/themes';

interface Props {
  children: React.ReactNode;
}

type initialContextProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};
const initialContext = {
  theme: themes[0],
  setTheme: () => {},
};
export const Context = createContext<initialContextProps>(initialContext);

export const ContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(initialContext.theme);
  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
};
