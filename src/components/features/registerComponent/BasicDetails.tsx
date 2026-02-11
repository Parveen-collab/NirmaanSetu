import Input from "@/src/components/common/Input";

export default function BasicDetails({ formData, setFormData }: any) {
  return (
    <div className="space-y-4">
      <Input
        type="mobile"
        placeholder="Mobile Number (OTP verified)"
        value={formData.mobile}
        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
      />

      <Input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />

      <Input
        type="number"
        placeholder="Aadhaar Number"
        value={formData.aadhaar}
        onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
      />
    </div>
  );
}
