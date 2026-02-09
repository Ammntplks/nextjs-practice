"use client";

import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  function Add() {
    if (text.trim() === "") 
    {
        return;
    }

    if (editIndex === null) 
    {
      setItems([...items, text]);
    } else 
    {
      const newItems = [...items];
      newItems[editIndex] = text;
      setItems(newItems);
      setEditIndex(null);
    }

    setText("");
  }

  function Edit(index: number) 
  {
    setText(items[index]);
    setEditIndex(index);
  }
  function Delete(index: number) 
  {
    setItems(items.filter((_, i) => i !== index));
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg ">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4 sticky top-10">
          Simple CRUD
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-4 sticky top-10">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="พิมพ์ข้อมูล..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          />
          <button
            onClick={Add}
            className={`px-4 py-2 rounded-lg text-white
              ${editIndex === null
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-green-500 hover:bg-green-600"}`}
          >
            {editIndex === null ? "เพิ่ม" : "อัปเดต"}
          </button>
        </div>

        {/* List */}
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg text-gray-800">
              <span>{item}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => Edit(index)}
                  className="text-sm px-3 py-1 rounded bg-yellow-400 hover:bg-yellow-500 text-white">
                  แก้ไข
                </button>
                <button
                  onClick={() => Delete(index)}
                  className="text-sm px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white">
                  ลบ
                </button>
              </div>
            </li>
          ))}
        </ul>

        {items.length === 0 && (
          <p className="text-center text-gray-400 mt-4">
            ยังไม่มีข้อมูล
          </p>
        )}
      </div>
      <div>
        
      </div>
    </div>
  );
}
