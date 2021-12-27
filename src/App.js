import React from 'react';
import { Header, Intro, Features, Category, Waffle, Footer } from './container/imports';
import './App.css'

const App = () => {
   return (
      <div>
         <Header />
         <Intro />
         <Features />
         <Category />
         <Waffle />
         <Footer />
      </div>
   );
};

export default App;
