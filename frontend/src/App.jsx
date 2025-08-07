import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';

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
    <div>
      <nav className="p-4 bg-gray-100 flex space-x-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
      </nav>
      <Page />
    </div>
  );
}
