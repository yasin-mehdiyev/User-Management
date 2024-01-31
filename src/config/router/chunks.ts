import { lazy } from 'react';

// NotFoundPage
export const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage')
);

// Public Imports
export const UsersPage = lazy(() => import('../../pages/UsersPage'));
export const PostsPage = lazy(() => import('../../pages/PostsPage'));
export const AlbumsPage = lazy(() => import('../../pages/AlbumsPage'));
