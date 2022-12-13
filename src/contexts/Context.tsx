import React, { createContext } from 'react';
import { themes } from '../utils/themes';
import { Theme } from '../Types/types';

type ContextType = {
  theme: Theme;
};

const initialState = {
  theme: { theme: themes[0] },
};

export const Context = createContext<ContextType>(initialState);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
