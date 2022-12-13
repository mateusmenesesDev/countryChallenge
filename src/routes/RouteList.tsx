import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { NotFound } from '../pages/NotFound';
import { Theme } from '../Types/types';

export function RouteList({ theme }: Theme) {
  return useRoutes([
    { path: '/', element: <Home theme={theme} /> },
    { path: 'detalhes/:countryName', element: <Detail theme={theme} /> },
    { path: '*', element: <NotFound /> },
  ]);
}
