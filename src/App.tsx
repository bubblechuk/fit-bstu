import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import {Search} from './components/search/Search'
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState<boolean>(false);
  console.log(search);
  const handleButtonClick = (newValue: string) => {
    console.log(typeof(setSearch))
    setSearch(!search);
  };
  return (
    <div className="App">
    <Search button={setSearch} search={search}/>
    <Header button={setSearch} search={search}/>
    <div className="content">
    <Main/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
