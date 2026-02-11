import Input from "@/src/components/common/Input";

export default function EmployerDetails({ formData, setFormData }: any) {
  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-sm font-semibold">Employer Details</h3>

      <Input
        type="text"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={(e) =>
          setFormData({ ...formData, companyName: e.target.value })
        }
      />
      {/* <input
        type="text"
        placeholder="Company Name"
        className="input"
        value={formData.companyName}
        onChange={(e) =>
          setFormData({ ...formData, companyName: e.target.value })
        }
      /> */}

      <Input
        type="text"
        placeholder="Company Address"
        className="input"
        value={formData.companyAddress}
        onChange={(e) =>
          setFormData({ ...formData, companyAddress: e.target.value })
        }
      />
      {/* <input
        type="text"
        placeholder="Company Address"
        className="input"
        value={formData.companyAddress}
        onChange={(e) =>
          setFormData({ ...formData, companyAddress: e.target.value })
        }
      /> */}

      <Input
        type="text"
        placeholder="Company Photos (URL or ref)"
        className="input"
        value={formData.companyPhotos}
        onChange={(e) =>
          setFormData({ ...formData, companyPhotos: e.target.value })
        }
      />

      {/* <input
        type="text"
        placeholder="Company Photos (URL or ref)"
        className="input"
        value={formData.companyPhotos}
        onChange={(e) =>
          setFormData({ ...formData, companyPhotos: e.target.value })
        }
      /> */}
    </div>
  );
}
