"use client";

import { useParams } from "next/navigation";
import { mockProducts } from "@/app/types/product";

export default function Page() {
  const { id } = useParams<{ id: string }>();

  const productId = Number(id);

  const product = mockProducts.find((p) => p.id === productId);

  if (!product) {
    return <div className="p-8">Product not found</div>;
  }

  return (
    <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>

          <div className="text-sm text-gray-600">
            <span>แบรนด์: </span>
            <span className="mx-2">|</span>
            <span>รหัสสินค้า: </span>
          </div>

          {/* ราคา */}
          <div className="py-4 border-t border-b border-gray-200">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-red-600">
                ฿{product.price.toLocaleString()}
              </span>
            </div>
          </div>

          <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition">
            ซื้อเลย
          </button>
        </div>
      </div>
    </div>
  );
}
