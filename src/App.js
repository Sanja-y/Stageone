import logo from './logo.svg';
import './App.css';
import "./index.css"
import { InterviewSection } from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GetStarted, Instructions} from "./pages/pages"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  

  return (
    <QueryClientProvider client ={queryClient}>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path='/camera-setup' element={<Instructions />} />
          <Route path="/interview-section" element={<InterviewSection/>} />
        </Routes>
      </Router>    
    </div>
    </QueryClientProvider>
  );
}

export default App;
