import Link from "next/link";
import Image from "next/image";
import { ProductProps } from "@/app/types/product";

export default function ProductCard({ id, title, price, image, }: ProductProps) 
{
  return (
    <Link href={`/product/${id}`}>
      <div className="border rounded-xl p-4 hover:shadow-lg transition cursor-pointer bg-white">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg object-cover"
        />

        <h2 className="mt-3 text-lg font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-red-600 font-bold">
          {price.toLocaleString()} บาท
        </p>
      </div>
    </Link>
  );
}
