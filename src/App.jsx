import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import './App.css'

function App() {

  return (
    <Router>
    <Header />
    <Home />
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </Routes>
  </Router>
  )
}
export default App
