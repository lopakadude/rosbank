import { lazy } from 'react';
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MainPage = lazy(() => import('../pages/MainPage'));

export { NotFoundPage, MainPage };
