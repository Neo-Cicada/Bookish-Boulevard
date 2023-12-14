import React from 'react';
import Header from './components/common/Header';
import BooksRouter from './utils/BooksRouter';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <Header />

      <BooksRouter />

      <Footer />
    </>
  );
}

export default App;
