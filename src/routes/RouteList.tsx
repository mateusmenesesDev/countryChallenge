import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { NotFound } from '../pages/NotFound';

export function RouteList() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: 'detalhes/:countryName', element: <Detail /> },
    { path: '*', element: <NotFound /> },
  ]);
}
