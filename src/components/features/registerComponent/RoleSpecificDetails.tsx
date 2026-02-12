import EmployeeDetailForm from "@/src/components/features/registerComponent/EmployeeDetailForm";
import EmployerDetailForm from "@/src/components/features/registerComponent/EmployerDetailForm";
import ShopDetailForm from "@/src/components/features/registerComponent/ShopDetailForm";

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
