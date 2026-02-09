export type Employee = {
  empId: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  address: string;
  phone: string;
};
export const mockEmployees: Employee[] = [
  { empId: "EMP001", firstName: "สมชาย", lastName: "ใจดี", birthDate: "1995-01-01", address: "กรุงเทพ", phone: "0811111111" },
  { empId: "EMP002", firstName: "สมหญิง", lastName: "ดีใจ", birthDate: "1998-05-12", address: "เชียงใหม่", phone: "0822222222" },
  { empId: "EMP003", firstName: "อาทิตย์", lastName: "ทองดี", birthDate: "1990-03-15", address: "นนทบุรี", phone: "0833333333" },
  { empId: "EMP004", firstName: "ปิยะ", lastName: "มาลา", birthDate: "1988-07-22", address: "ชลบุรี", phone: "0844444444" },
  { empId: "EMP005", firstName: "นฤมล", lastName: "ศรีสุข", birthDate: "1992-11-05", address: "ขอนแก่น", phone: "0855555555" },
  { empId: "EMP006", firstName: "วิทยา", lastName: "เก่งงาน", birthDate: "1985-02-28", address: "นครราชสีมา", phone: "0866666666" },
];


