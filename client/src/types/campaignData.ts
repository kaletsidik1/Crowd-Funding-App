import charityEducation from '../assets/images/Banner.png';
import saveChildren from '../assets/images/Banner.png';
import sheRides from '../assets/images/Banner.png';
import pledgeSmile from '../assets/images/Banner.png';

interface Campaign {
  title: string;
  raised: number;
  target: number;
  category: string;
  country: string;
  image: string;
}

export const campaignData: Campaign[] = [
  {
    title: 'Charity for Education',
    raised: 10848,
    target: 10000,
    category: 'Education',
    country: 'United Kingdom',
    image: charityEducation,
  },
  {
    title: 'Save Children',
    raised: 12730,
    target: 20000,
    category: 'Disability',
    country: 'USA',
    image: saveChildren,
  },
  {
    title: 'She Rides',
    raised: 3562,
    target: 5000,
    category: 'Business Idea',
    country: 'USA',
    image: sheRides,
  },
  {
    title: 'Pledge A Smile',
    raised: 13562,
    target: 15000,
    category: 'Health & Medical',
    country: 'USA',
    image: pledgeSmile,
  },
   {
    title: 'Charity for Education',
    raised: 10848,
    target: 10000,
    category: 'Education',
    country: 'United Kingdom',
    image: charityEducation,
  },
   {
    title: 'Charity for Education',
    raised: 10848,
    target: 10000,
    category: 'Education',
    country: 'United Kingdom',
    image: charityEducation,
  },
   {
    title: 'Charity for Education',
    raised: 10848,
    target: 10000,
    category: 'Education',
    country: 'United Kingdom',
    image: charityEducation,
  },
   {
    title: 'Charity for Education',
    raised: 10848,
    target: 10000,
    category: 'Education',
    country: 'United Kingdom',
    image: charityEducation,
  },
];