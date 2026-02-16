import Input from "@/src/components/common/Input";

export default function EmployeeDetailForm({ formData, setFormData }: any) {
  return (
    <div className="mt-6 space-y-4">
      <Input
        type="text"
        placeholder="Service Category"
        value={formData.serviceCategory}
        onChange={(e) =>
          setFormData({ ...formData, serviceCategory: e.target.value })
        }
      />

      <Input
        type="text"
        placeholder="Service Specialty"
        value={formData.serviceSpecialty}
        onChange={(e) =>
          setFormData({ ...formData, serviceSpecialty: e.target.value })
        }
      />

      <Input
        type="number"
        placeholder="Experience (years)"
        value={formData.experience}
        onChange={(e) =>
          setFormData({ ...formData, experience: e.target.value })
        }
      />
    </div>
  );
}
