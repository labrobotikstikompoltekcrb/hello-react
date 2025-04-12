// Import Libraries 
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import './App.css';
// Create Component 

const App = () => {
  return (
   <div className='App'>
      <Header />
      <List />
      <Footer />
   </div>
  );
}
// Export Component
export default App;