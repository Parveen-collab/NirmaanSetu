export default function EmployeeDetails({ formData, setFormData }: any) {
  return (
    <div className="mt-6 space-y-4">
      <input
        type="text"
        placeholder="Service Category"
        className="input"
        value={formData.serviceCategory}
        onChange={(e) =>
          setFormData({ ...formData, serviceCategory: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Service Specialty"
        className="input"
        value={formData.serviceSpecialty}
        onChange={(e) =>
          setFormData({ ...formData, serviceSpecialty: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Experience (years)"
        className="input"
        value={formData.experience}
        onChange={(e) =>
          setFormData({ ...formData, experience: e.target.value })
        }
      />
    </div>
  );
}
