import { Employee } from "../types/Employee";

type Mode = "add" | "edit" | "delete" | "view";

type Props = {
  mode: Mode;
  employee: Employee;
  onClose: () => void;
  onChange: (emp: Employee) => void;
  onSave: () => void;
  onConfirmDelete: () => void;
};

export default function EmployeeModal({
  mode,
  employee,
  onClose,
  onChange,
  onSave,
  onConfirmDelete,
}: Props) {
  function update(key: string, value: string) 
  {
    onChange({ ...employee, [key]: value } as Employee);
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96 text-gray-800">
        <h2 className="font-bold mb-4 uppercase">
          {mode === "add" ? "Add Employee" : mode}
        </h2>

        {mode !== "delete" && (
          <div>
            {/* empId */}
            <input
              value={employee.empId}
              disabled={mode === "edit" || mode === "view"}
              onChange={(e) => update("empId", e.target.value)}
              placeholder="รหัสพนักงาน"
              className="border p-2 w-full mb-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />

            {/* firstName */}
            <input
              value={employee.firstName}
              disabled={mode === "view"}
              onChange={(e) => update("firstName", e.target.value)}
              placeholder="ชื่อ"
              className="border p-2 w-full mb-2"
            />

            {/* lastName */}
            <input
              value={employee.lastName}
              disabled={mode === "view"}
              onChange={(e) => update("lastName", e.target.value)}
              placeholder="นามสกุล"
              className="border p-2 w-full mb-2"
            />

            {/* birthDate */}
            <input
              value={employee.birthDate}
              disabled={mode === "view"}
              onChange={(e) => update("birthDate", e.target.value)}
              placeholder="วัน/เดือน/ปี เกิด"
              className="border p-2 w-full mb-2"
            />

            {/* address */}
            <input
              value={employee.address}
              disabled={mode === "view"}
              onChange={(e) => update("address", e.target.value)}
              placeholder="ที่อยู่"
              className="border p-2 w-full mb-2"
            />

            {/* phone */}
            <input
              value={employee.phone}
              disabled={mode === "view"}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                update("phone", value);
              }}
              placeholder="เบอร์โทรศัพท์"
              className="border p-2 w-full mb-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
        )}

        {mode === "delete" && <p>ยืนยันการลบข้อมูลพนักงาน?</p>}

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400 transition"
          >
            {mode === "view" ? "Close" : "Cancel"}
          </button>

          {(mode === "add" || mode === "edit") && (
            <button
              onClick={onSave}
              disabled={
                mode === "add" &&
                (!employee.empId || !employee.firstName || !employee.lastName)
              }
              className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Save
            </button>
          )}

          {mode === "delete" && (
            <button
              onClick={onConfirmDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
