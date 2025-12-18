export default function EquipmentTable({ data, onDelete, onEdit }) {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Equipment List</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last Cleaned</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.status}</td>
              <td>{item.lastCleaned}</td>
              <td>
                <button className="edit" onClick={() => onEdit(item)}>
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="delete"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
