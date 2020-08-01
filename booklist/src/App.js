import React from 'react';
import BookContextProvider from './context/BookContext'
import NavBar from './componets/NavBar';
import BookList from './componets/BookList';
import NewBookForm from './componets/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList/>
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
