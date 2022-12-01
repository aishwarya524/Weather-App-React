import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/home/HomeScreen';
import CountryScreen from './components/country/CountryScreen';
import WeatherScreen from './components/weather/WeatherScreen';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/country/:name' element={<CountryScreen/>}/>
        <Route path='/weather/:name' element={<WeatherScreen/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
