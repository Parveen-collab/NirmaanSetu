export default function BasicDetails({ formData, setFormData }: any) {
  return (
    <div className="space-y-4">
      <input
        type="tel"
        placeholder="Mobile Number (OTP verified)"
        className="input"
        value={formData.mobile}
        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
      />
      <input
        type="text"
        placeholder="Full Name"
        className="input"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Aadhaar Number"
        className="input"
        value={formData.aadhaar}
        onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
      />
    </div>
  );
}
