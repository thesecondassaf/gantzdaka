import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  const path = window.location.pathname;
  let Page;
  switch (path) {
    case '/about':
      Page = About;
      break;
    case '/contact':
      Page = Contact;
      break;
    case '/register':
      Page = Register;
      break;
    case '/login':
      Page = Login;
      break;
    default:
      Page = Home;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Page />
      </main>
      <Footer />
    </div>
  );
}
