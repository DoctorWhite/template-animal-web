import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/homepage';
import { TemplateGeneratorPage } from './pages/templateGeneratorPage';

function App() {
  return (
    <div className="w-screen h-screen">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/generator' element={<TemplateGeneratorPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
  );
}

export default App;
