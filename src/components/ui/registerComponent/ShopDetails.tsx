export default function ShopDetails({ formData, setFormData }: any) {
  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-sm font-semibold">Shop Details</h3>

      <input
        type="text"
        placeholder="Shop Name"
        className="input"
        value={formData.shopName}
        onChange={(e) =>
          setFormData({ ...formData, shopName: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Shop Category"
        className="input"
        value={formData.shopCategory}
        onChange={(e) =>
          setFormData({ ...formData, shopCategory: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Shop Speciality"
        className="input"
        value={formData.shopSpeciality}
        onChange={(e) =>
          setFormData({ ...formData, shopSpeciality: e.target.value })
        }
      />

      <select
        className="input"
        value={formData.shopType}
        onChange={(e) =>
          setFormData({ ...formData, shopType: e.target.value })
        }
      >
        <option value="">Select Shop Type</option>
        <option value="Retail">Retail</option>
        <option value="Bulk">Bulk</option>
        <option value="Retail & Bulk">Retail & Bulk</option>
      </select>

      <input
        type="text"
        placeholder="Shop Address"
        className="input"
        value={formData.shopAddress}
        onChange={(e) =>
          setFormData({ ...formData, shopAddress: e.target.value })
        }
      />
    </div>
  );
}
