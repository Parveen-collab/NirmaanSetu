import Input from "@/src/components/common/Input";

export default function BasicDetailForm({ formData, setFormData }: any) {
  return (
    <div className="space-y-4">
      <Input
        label="Mobile Number"
        type="number"
        variant="phone"
        value={formData.mobile}
        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
      />

      <Input
        label="Full Name"
        type="text"
        variant="name"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />

      <Input
        label="Aadhaar Number"
        type="number"
        variant="aadhaar"
        value={formData.aadhaar}
        onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
      />
    </div>
  );
}
