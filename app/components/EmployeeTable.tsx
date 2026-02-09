import { Employee } from "../types/Employee";

type Props = {
  employees: Employee[];
  onView: (emp: Employee) => void;
  onEdit: (emp: Employee) => void;
  onDelete: (emp: Employee) => void;
};

export default function EmployeeTable({
  employees,
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (
    <table className="w-full border">
      <thead className="bg-blue-800 text-white">
        <tr>
          <th className="border p-2">รหัส</th>
          <th className="border p-2">ชื่อ</th>
          <th className="border p-2">นามสกุล</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody className="text-slate-800">
  {employees.map((e, index) => (
    <tr
      key={e.empId}
      className={`${index % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-blue-50 transition`}>

      <td className="px-4 py-3 border-b border-white">
        {e.empId}
      </td>
      <td className="px-4 py-3 border-b border-white">
        {e.firstName}
      </td>
      <td className="px-4 py-3 border-b border-white">
        {e.lastName}
      </td>

      <td className="px-4 py-3 border-b border-white">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => onView(e)}
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm transition">
            View
          </button>

          <button
            onClick={() => onEdit(e)}
            className="px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm transition">
            Edit
          </button>

          <button
            onClick={() => onDelete(e)}
            className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm transition">
            Delete
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

    </table>
  );
}
