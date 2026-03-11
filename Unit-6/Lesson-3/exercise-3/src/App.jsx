import './App.css'
import Carousel from './components/Carousel';

import mongodbImg from './assets/mongodb.png';
import expressImg from './assets/express.png';
import reactImg from './assets/react-icon.png';
import nodejsImg from './assets/nodejs.png';

function App() {
  const imageUrls = [
    mongodbImg,
    expressImg,
    reactImg,
    nodejsImg,
  ];

  return (
    <div>
      <h1>Image Carousel</h1>
      <Carousel images={imageUrls} />
    </div>
  );
}

export default App
