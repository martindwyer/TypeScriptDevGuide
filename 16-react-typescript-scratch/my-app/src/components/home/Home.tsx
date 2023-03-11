import Jumbotron from './Jumbotron';
import { Features } from '../features/Features';
import { Slider } from '../slider/Slider';
import { Callout } from '../callout/Callout';

export const Home = () => {
  return (
    <>
      <Jumbotron />
      <Features />
      <hr className="section" />
      <Slider id="homeSlider" />
      <hr className="section" />
      <Callout />
    </>
  );
};
