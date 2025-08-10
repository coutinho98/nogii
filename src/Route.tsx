import { BrowserRouter as Router, Route, Routes } from 'react-router';
import App from './App'; 
import LegalPage from './components/legal';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;