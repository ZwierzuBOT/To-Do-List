
import './App.css';
import TodoWrapper from './components/TodoWrapper';
import Header from './components/Header'

import { Routes, Route } from 'react-router-dom';

import Contact from './components/Contact/Contact'
function App() {


  
  return (

      <div className="App">

        <Header/>
        <Routes>
          <Route path='/' element={<TodoWrapper/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
          
          
    
      </div>
  );
}

export default App;
