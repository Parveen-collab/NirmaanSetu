import EmployeeDetailForm from "@/src/components/features/register/EmployeeDetailForm";
import EmployerDetailForm from "@/src/components/features/register/EmployerDetailForm";
import ShopDetailForm from "@/src/components/features/register/ShopDetailForm";

export default function RoleSpecificDetails({
  role,
  formData,
  setFormData,
}: any) {
  if (role === "employee")
    return <EmployeeDetailForm formData={formData} setFormData={setFormData} />;

  if (role === "employer")
    return <EmployerDetailForm formData={formData} setFormData={setFormData} />;

  if (role === "shop")
    return <ShopDetailForm formData={formData} setFormData={setFormData} />;

  return null;
}
