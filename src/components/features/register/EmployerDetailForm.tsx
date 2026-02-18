import Input from "@/src/components/common/Input";

export default function EmployerDetailForm({ formData, setFormData }: any) {
  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-sm font-semibold">Employer Details</h3>

      <Input
        label="Company Name"
        type="text"
        variant="name"
        // type="text"
        // placeholder="Company Name"
        value={formData.companyName}
        onChange={(e) =>
          setFormData({ ...formData, companyName: e.target.value })
        }
      />

      <Input
        label="Company Address"
        type="text"
        variant="name"
        // type="text"
        // placeholder="Company Address"
        value={formData.companyAddress}
        onChange={(e) =>
          setFormData({ ...formData, companyAddress: e.target.value })
        }
      />

      <Input
        label="Company Photos (URL or ref)"
        type="file"
        // variant="name"
        // type="text"
        // placeholder="Company Photos (URL or ref)"
        value={formData.companyPhotos}
        onChange={(e) =>
          setFormData({ ...formData, companyPhotos: e.target.value })
        }
      />
    </div>
  );
}
