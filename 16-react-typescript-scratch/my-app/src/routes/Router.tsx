import { createBrowserRouter } from 'react-router-dom';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';
import { FAQ } from '../components/faq/FAQ';
import { Home } from '../components/home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
