type Props = {
  keyword: string;
  onChange: (value: string) => void;
};

export default function EmployeeSearch({ keyword, onChange }: Props) {
  return (
    <input
      value={keyword}
      onChange={(e) => onChange(e.target.value)}
      placeholder="ค้นหา รหัสพนักงาน / ชื่อ / นามสกุล"
      className="border px-3 py-2 rounded w-80"
    />
  );
}
