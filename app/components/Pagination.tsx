type Props = {
  page: number;
  totalPage: number;
  onChange: (page: number) => void;
};

export default function Pagination({ page, totalPage, onChange }: Props) {
  return (
    <div className="flex gap-2 mt-4">
      {Array.from({ length: totalPage }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          className={`px-3 py-1 rounded ${
            page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
