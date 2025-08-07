import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Error sending message');
      }
    } catch (err) {
      setStatus('Error sending message');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          className="border p-2 w-full"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="border p-2 w-full"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          className="border p-2 w-full"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Send
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
