import './App.css';
import AllPersonsPage from './Pages/AllPersonsPage';
import PersonPage from './Pages/PersonPage';
import FormPage from './Pages/FormPage';
import { Routes, Route, } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<AllPersonsPage />} />
        <Route path='Person' element={<PersonPage />} />
        <Route path='Form' element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
