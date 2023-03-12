import careers from '../../assets/images/portfolio/careers.jpeg';
import ccBooks from '../../assets/images/portfolio/cc-books.jpeg';
import chatApp from '../../assets/images/portfolio/chat-app.jpeg';
import expensify from '../../assets/images/portfolio/expensify.jpeg';
import feedbackFocus from '../../assets/images/portfolio/feedback-focus.jpeg';
import mirefa from '../../assets/images/portfolio/mirefa.jpeg';
import moneyMatters from '../../assets/images/portfolio/money-matters.jpg';
import penguinTours from '../../assets/images/portfolio/penguin-tours.jpeg';
import priceMonitor from '../../assets/images/portfolio/price-monitor.jpeg';
import primalStrength from '../../assets/images/portfolio/primal-strength.jpeg';
import wildThings from '../../assets/images/portfolio/wild-things.jpeg';

export type SliderProps = {
  slides: { image: any; alt: string; title: string; link: string }[];
};

export const slides = [
  {
    image: careers,
    alt: 'careers',
    title: 'Careers Employment Application',
    link: '',
  },
  {
    image: ccBooks,
    alt: 'cc books',
    title: "CC's online bookstore",
    link: '',
  },
  {
    image: chatApp,
    alt: 'chat app',
    title: 'Secure chat application',
    link: '',
  },
  // {
  //   image: expensify,
  //   alt: 'expensify',
  //   title: 'Expense management system',
  //   link: '',
  // },
  // {
  //   image: feedbackFocus,
  //   alt: 'feedback focus',
  //   title: 'Survey creation and analysis',
  //   link: '',
  // },
  // {
  //   image: mirefa,
  //   alt: 'mirefa',
  //   title: 'Mirefa international ministry',
  //   link: '',
  // },
  // {
  //   image: moneyMatters,
  //   alt: 'money matters',
  //   title: 'Money matters financial calculators',
  //   link: '',
  // },
  // {
  //   image: penguinTours,
  //   alt: 'penguin tours',
  //   title: 'Penguin Tours',
  //   link: '',
  // },
  // {
  //   image: priceMonitor,
  //   alt: 'price monitor',
  //   title: 'Price monitor service',
  //   link: '',
  // },
  // {
  //   image: primalStrength,
  //   alt: 'primal strength',
  //   title: 'Primal strength and conditioning',
  //   link: '',
  // },
  // {
  //   image: wildThings,
  //   alt: 'wild things',
  //   title: 'Wild Things Nature Photography',
  //   link: '',
  // },
];
