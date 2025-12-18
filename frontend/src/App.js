import { useEffect, useState } from "react";
import "./App.css";
import {
  getEquipment,
  addEquipment,
  deleteEquipment,
  updateEquipment,
} from "./services/api";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const loadData = async () => {
    const data = await getEquipment();
    setEquipment(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = async (item) => {
    await addEquipment(item);
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteEquipment(id);
    loadData();
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleUpdate = async (item) => {
    await updateEquipment(item.id, item);
    setEditingItem(null);
    loadData();
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  return (
    <div className="container">
      <h2>Equipment Tracker</h2>

      <EquipmentForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingItem={editingItem}
        onCancel={handleCancel}
      />

      <EquipmentTable
        data={equipment}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
