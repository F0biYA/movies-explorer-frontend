import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>

  );
}

export default App;
