import React from 'react';
import Intro from './Components/Intro/Intro';
import MediaCard from './Components/Media Card/MediaCard';
import Room from './Components/Room/Room';

function App() {

  return (
    <div className="App">
      <Intro/>
      <MediaCard title='Learning React' body="I am starting learning react.js from Panacloud." imgUrl="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"/>
      <Room/>
    </div>
  );
}

export default App;
