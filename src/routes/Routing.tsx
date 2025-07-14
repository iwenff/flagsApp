import { Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import ApiPage from '../pages/FetchApiPage';

const Routing = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
