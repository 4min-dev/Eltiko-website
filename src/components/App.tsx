import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const App:React.FC = () => {

  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
};

export default App;
