import './App.css';
import States from './components/States';
import Cities from './components/Cities';
import {
  Routes,
  Route
} from "react-router-dom";
import SearchResults from './components/SearchResults';
import Place from './components/Place';
import Footer from './components/Footer';
import { Stack } from '@mui/material';
import Header from './components/Header';


function App() {
  return (
    <div className='App'>
      <div>
        <Header />
      </div>
      <Stack mx={3}>
        <Routes>
          <Route exact path="/" element={<States />} />
          <Route path="/:stateCode" element={<Cities />} />
          <Route path="/:stateCode/:city" element={<SearchResults />} />
          <Route path="/:stateCode/:city/:business" element={<Place />} />
        </Routes>
      </Stack>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
