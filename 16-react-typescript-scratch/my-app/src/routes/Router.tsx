import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { FAQ } from "../components/faq/FAQ";
import { Home } from "../components/home/Home";
import { Layout } from "../components/layout/Layout";
import Terms from "../components/legal/Terms";
import Privacy from "../components/legal/Privacy";
import { ScrollToTop } from "../components/layout/ScrollToTop";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <ScrollToTop />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="contact" element={<Contact />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
    </Route>
  )
);
