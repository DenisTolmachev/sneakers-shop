import { FooterInfo } from './FooterInfo/FooterInfo';
import FooterLocation from './FooterLocation/FooterLocation';
import { FooterMenu } from './FooterMenu/FooterMenu';

export const Footer = () => {
  return (
    <div className='flex flex-wrap p-10 w-full'>
      <FooterInfo />
      <FooterMenu />
      <FooterLocation />
    </div>
  );
};