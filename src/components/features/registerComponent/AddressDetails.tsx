export default function AddressDetails({ formData, setFormData }: any) {
  return (
    <div className="space-y-4 mt-4">
      <input
        type="text"
        placeholder="Permanent Address"
        className="input"
        value={formData.permanentAddress}
        onChange={(e) =>
          setFormData({ ...formData, permanentAddress: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Current Address"
        className="input"
        value={formData.currentAddress}
        onChange={(e) =>
          setFormData({ ...formData, currentAddress: e.target.value })
        }
      />
    </div>
  );
}
