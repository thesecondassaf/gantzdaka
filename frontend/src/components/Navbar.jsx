export default function Navbar() {
  return (
    <nav className="p-4 bg-amber-200 text-orange-800 flex space-x-4">
      <a href="/" className="flex items-center space-x-1">
        <span role="img" aria-label="home">🏠</span>
        <span>Home</span>
      </a>
      <a href="/about" className="flex items-center space-x-1">
        <span role="img" aria-label="about">ℹ️</span>
        <span>About</span>
      </a>
      <a href="/contact" className="flex items-center space-x-1">
        <span role="img" aria-label="contact">📬</span>
        <span>Contact</span>
      </a>
      <a href="/register" className="flex items-center space-x-1">
        <span role="img" aria-label="register">📝</span>
        <span>Register</span>
      </a>
      <a href="/login" className="flex items-center space-x-1">
        <span role="img" aria-label="login">🔐</span>
        <span>Login</span>
      </a>
    </nav>
  );
}

