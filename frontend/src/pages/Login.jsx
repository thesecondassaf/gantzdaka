import { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Logged in');
        setForm({ email: '', password: '' });
      } else {
        setStatus('Invalid credentials');
      }
    } catch (err) {
      setStatus('Error logging in');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          className="border p-2 w-full"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="border p-2 w-full"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
