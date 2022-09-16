import Layouts from '@/layouts';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layouts />,
  },
];

export const Element = () => useRoutes(routes);
