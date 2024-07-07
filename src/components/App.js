import './App.css';
import Home from './Home/Home';
import {Routes,Route} from 'react-router-dom';
import About from './About/About';
import Layout from './Layout/Layout';
import Search from './Search/Search';
import List from './List/List';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/List/:data" element={<List/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
