import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage'
import PublicationsPage from './pages/PublicationsPage'
import ImagesPage from './pages/ImagesPage';
import ContactsPage from './pages/ContactsPage';

const Header = () => {
  return (
    <div className="containet">
      <nav className="navStyle">
        <Link to="home">Home</Link>
        <Link to="contacts">Contacts</Link>
        <Link to="images">Images</Link>
        <Link to="publications">Publications</Link>
      </nav>
    </div>
  )
}
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage title='Home' />} />
        <Route path="/contacts/" element={<ContactsPage title='Contacts' />} />
        <Route path="/images/" element={<ImagesPage title='Gallery' />} />
        <Route path="/publications/" element={<PublicationsPage title='Publications' />} />
      </Routes>

    </Router>
  )
}

export default App;
