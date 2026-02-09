"use client";

import { useState } from "react";
import { Employee } from "./types/Employee";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeTable from "./components/EmployeeTable";
import Pagination from "./components/Pagination";
import EmployeeModal from "./components/EmployeeModal";
import { mockEmployees } from "./types/Employee";

const PAGE_SIZE = 5;

const emptyEmployee: Employee = {
  empId: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  address: "",
  phone: "",
};

export default function Page() {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);

  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Employee | null>(null);
  const [mode, setMode] = useState<"add" | "view" | "edit" | "delete" | null>(
    null,
  );

  // ===== search + paging =====
  const filtered = employees.filter(
    (e) =>
      e.empId.includes(keyword) ||
      e.firstName.includes(keyword) ||
      e.lastName.includes(keyword),
  );

  const totalPage = Math.ceil(filtered.length / PAGE_SIZE);
  const result = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function closeModal() {
    setSelected(null);
    setMode(null);
  }

  function handleSave() {
    if (!selected) {
      return;
    }

    // ตรวจสอบรหัสซ้ำเมื่อ add
    if (mode === "add") {
      const isDuplicate = employees.some((e) => e.empId === selected.empId);
      if (isDuplicate) {
        alert("รหัสพนักงานนี้มีอยู่แล้ว");
        return;
      }
      setEmployees([...employees, selected]);
    }

    if (mode === "edit") {
      setEmployees(
        employees.map((e) => (e.empId === selected.empId ? selected : e)),
      );
    }

    closeModal();
  }

  function handleDelete() {
    if (!selected) {
      return;
    }
    setEmployees(employees.filter((e) => e.empId !== selected.empId));
    closeModal();
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">
            Employee Management
          </h1>
          <p className="text-slate-500 text-sm">ระบบจัดการข้อมูลพนักงาน</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Search + Add */}
          <div className="flex flex-wrap gap-4 justify-between items-center mb-6 text-gray-800">
            {/* className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl shadow transition"> */}
            <EmployeeSearch
              keyword={keyword}
              onChange={(value) => {
                setKeyword(value);
                setPage(1);
              }}
            />

            <button
              onClick={() => {
                setSelected({ ...emptyEmployee });
                setMode("add");
              }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl shadow transition"
            >
              Add Employee
            </button>
          </div>

          {/* Table wrapper */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <EmployeeTable
              employees={result}
              onView={(emp) => {
                setSelected(emp);
                setMode("view");
              }}
              onEdit={(emp) => {
                setSelected({ ...emp });
                setMode("edit");
              }}
              onDelete={(emp) => {
                setSelected(emp);
                setMode("delete");
              }}
            />
          </div>

          {/* Pagination */}
          {totalPage > 1 && (
            <div className="flex justify-end mt-6">
              <Pagination
                page={page}
                totalPage={totalPage}
                onChange={setPage}
              />
            </div>
          )}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center text-slate-400 py-10">
              ไม่พบข้อมูลพนักงาน
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {mode && selected && (
        <EmployeeModal
          mode={mode}
          employee={selected}
          onClose={closeModal}
          onChange={setSelected}
          onSave={handleSave}
          onConfirmDelete={handleDelete}
        />
      )}
    </div>
  );
}
