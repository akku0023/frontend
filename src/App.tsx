import * as React from 'react';
import Navbar from './components/Navbar/index';
import BackgroundImage from './components/BackgroundImage';
import image from './assets/image4.png';

const data = ['Home', 'Acheivements', 'Derby', 'Reports', 'Team', 'Contact Us']

export default function App() {
  return (
    <div>
      <BackgroundImage image={image}>
        <Navbar pages={data} />
      </BackgroundImage>
    </div>

  );
}
