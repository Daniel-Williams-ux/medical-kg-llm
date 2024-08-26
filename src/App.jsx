import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css'

function App() {

  return (
    <Router>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
    </Routes>
  </Router>
  )
}
export default App
