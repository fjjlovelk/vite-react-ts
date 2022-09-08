import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/views/home';
import NotFound from '@/views/error-page/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
