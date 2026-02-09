"use client";
import { useEffect, useState } from "react";

export default function NameForm() {

  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) 
    {
      setSavedName(storedName);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) 
  {
    if (!name.trim()) {
      alert("กรุณากรอกชื่อ");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    localStorage.setItem("name", name);
    setSavedName(name);
    setName("");
  }

  return (
    <div className="card mb-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="space-x-3">
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 text-gray-800 rounded-xl"
            placeholder="กรอกชื่อ"/>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-xl">
            บันทึก
          </button>
        </div>

        {savedName && (
          <p className="text-gray-800">ชื่อที่บันทึก: {savedName}</p>
        )}
      </form>
    </div>
  );
}
