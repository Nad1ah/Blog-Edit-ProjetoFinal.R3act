import { createBrowserRouter } from 'react-router-dom'
import RootPage from './pages'
import PostPage from './pages/post'
import BarNav from './components/navBar'

export const router = createBrowserRouter([
  {
    path: '/',

    element: (
      <BarNav>
        <RootPage />
      </BarNav>
    ),
  },
  {
    path: '/post/:id',
    element: (
      <BarNav>
        <PostPage />
      </BarNav>
    ),
  },
])
