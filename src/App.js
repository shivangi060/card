import React from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  return (
   <div className='App'>
     <Card
      imageUrl= 'https://rukminim2.flixcart.com/image/416/416/kmmcrrk0/mobile/4/g/a/8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg?q=70'
      name = 'realme 8'
      des='The realme 8 features a Super AMOLED Display so that you can enjoy vivid and eye-catching visuals that will enhance your viewing experience while streaming content, gaming, and so on. The Tilt-shift mode of the mobile phone can be used to play around with the perspective so that your pictures are out of the ordinary and mesmerising. And, thanks to the 16 MP Selfie Camera enables you to take delightful selfies with your loved ones and you can make them unique with features such as Selfie Nightscape and the AI Portrait mode.'
      price='₹15,999'
 />
   </div>
  );
}

export default App;
