import { Route, Routes, BrowserRouter } from 'react-router-dom';

// pages
import Detail from './pages/Detail';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detail/:movie_id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
