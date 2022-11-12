import MainLayout from 'src/layout/Main';

import HomePage from 'src/pages/Home';
import AdminPage from 'src/pages/Admin';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [{path: '/', element: <HomePage />}],
  },
  {
    path: '/admin',
    element: <MainLayout />,
    children: [{path: '', element: <AdminPage />}],
  },
];

export default routes;
