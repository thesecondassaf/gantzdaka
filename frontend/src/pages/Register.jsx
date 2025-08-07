import { useState } from 'react';

const cities = ['Jerusalem', 'Tel Aviv', 'Haifa'];
const charities = ['Charity A', 'Charity B', 'Charity C'];

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    city: '',
    teacherName: '',
    phone: '',
    preferredCharities: [],
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCharityChange = (e) => {
    const value = e.target.value;
    setForm((prev) => {
      const selected = prev.preferredCharities.includes(value)
        ? prev.preferredCharities.filter((c) => c !== value)
        : [...prev.preferredCharities, value];
      return { ...prev, preferredCharities: selected };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Registration submitted');
        setForm({ name: '', city: '', teacherName: '', phone: '', preferredCharities: [] });
      } else {
        setStatus('Error submitting');
      }
    } catch (err) {
      setStatus('Error submitting');
    }
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-orange-800 flex justify-center items-center space-x-2">
        <span role="img" aria-label="register">📝</span>
        <span>Gan Registration</span>
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          className="border p-2 w-full"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Gan Name"
        />
        <select
          className="border p-2 w-full"
          name="city"
          value={form.city}
          onChange={handleChange}
        >
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          className="border p-2 w-full"
          name="teacherName"
          value={form.teacherName}
          onChange={handleChange}
          placeholder="Teacher Name"
        />
        <input
          className="border p-2 w-full"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <div>
          <p className="font-semibold">Preferred Charities</p>
          {charities.map((ch) => (
            <label key={ch} className="block">
              <input
                type="checkbox"
                value={ch}
                checked={form.preferredCharities.includes(ch)}
                onChange={handleCharityChange}
                className="mr-2"
              />
              {ch}
            </label>
          ))}
        </div>
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">
          <span role="img" aria-label="register">📝</span> Register
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
