import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from 'react-router-dom';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';
import { FAQ } from '../components/faq/FAQ';
import { Home } from '../components/home/Home';
import { Layout } from '../components/layout/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
