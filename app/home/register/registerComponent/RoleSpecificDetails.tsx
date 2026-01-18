import EmployeeDetails from "./EmployeeDetails";
import EmployerDetails from "./EmployerDetails";
import ShopDetails from "./ShopDetails";

export default function RoleSpecificDetails({ role }: { role: string }) {
  if (role === "employee") return <EmployeeDetails />;
  if (role === "employer") return <EmployerDetails />;
  if (role === "shop") return <ShopDetails />;
  return null;
}
