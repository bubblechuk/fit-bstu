import './App.css';
import { Faculty } from './components/faculty/Faculty';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import {Search} from './components/search/Search'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  const [search, setSearch] = useState<boolean>(false);
  console.log(search);
  const handleButtonClick = (newValue: string) => {
    console.log(typeof(setSearch))
    setSearch(!search);
  };
  return (
    <div className="App">
      <Router>
        <Search button={setSearch} search={search}/>
        <Header button={setSearch} search={search}/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/faculty' element={<Faculty/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
