import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Faculty, Contacts } from './components/faculty/Faculty';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { useState } from 'react';
import { NewsArchive } from './components/NewsArchive/NewsArchive';
import './App.css'
import { NewsPage } from './components/Newspage/NewsPage';
function App() {
  const [search, setSearch] = useState<boolean>(false);
    return (
        <div className="App">
            <Router>
                <Search button={setSearch} search={search}/>
                <Header button={setSearch} search={search}/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path='/archive' element={<NewsArchive/>}/>
                        <Route path='/article' element={<NewsPage/>}/> 
                        <Route path="/faculty" element={<Faculty />}>
                            <Route path="about" element={<div>О факультете</div>} />
                            <Route path="contacts" element={<Contacts />} />
                            <Route path="eduwork" element={<div></div>} />
                            <Route path="scolarship" element={<div>Стипендии</div>} />
                            <Route path="dormitory" element={<div>Общежитие</div>} />
                        </Route>
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
