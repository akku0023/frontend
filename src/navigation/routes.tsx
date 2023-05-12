import { useRoutes, RouteObject, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Team from '../pages/Team';
import Layout from '../components/Layout';

const routes: RouteObject[] = [{
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'team',
        element: <Team />
      },
      {
        path: '',
        element: <Outlet />
      },
    ]
  },];

const Routes = () => useRoutes(routes);

export default Routes;