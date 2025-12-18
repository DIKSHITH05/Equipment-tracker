import { useState } from "react";

const initialState = {
  name: "",
  type: "",
  status: "Active",
  lastCleaned: "",
};

export default function EquipmentForm({ onAdd }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Equipment</h3>

      <input
        name="name"
        placeholder="Equipment Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <select name="type" value={form.type} onChange={handleChange}>
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select name="status" value={form.status} onChange={handleChange}>
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        name="lastCleaned"
        value={form.lastCleaned}
        onChange={handleChange}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}
