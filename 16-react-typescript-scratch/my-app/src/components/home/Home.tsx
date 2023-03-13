import Jumbotron from './Jumbotron';
import { Features } from '../features/Features';
import { Callout } from '../callout/Callout';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();
  return (
    <>
      <Jumbotron />
      <Features />
      <hr className="section" />
      <Callout />
    </>
  );
};
