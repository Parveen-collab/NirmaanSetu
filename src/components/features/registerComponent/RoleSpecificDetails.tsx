import EmployeeDetails from "./EmployeeDetails";
import EmployerDetails from "./EmployerDetails";
import ShopDetails from "./ShopDetails";

export default function RoleSpecificDetails({
  role,
  formData,
  setFormData,
}: any) {
  if (role === "employee")
    return <EmployeeDetails formData={formData} setFormData={setFormData} />;

  if (role === "employer")
    return <EmployerDetails formData={formData} setFormData={setFormData} />;

  if (role === "shop")
    return <ShopDetails formData={formData} setFormData={setFormData} />;

  return null;
}
