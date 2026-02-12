import Input from "@/src/components/common/Input";

export default function ShopDetailForm({ formData, setFormData }: any) {
  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-sm font-semibold">Shop Details</h3>

      <Input
      type="text"
        placeholder="Shop Name"
        value={formData.shopName}
        onChange={(e) =>
          setFormData({ ...formData, shopName: e.target.value })
        }
      />

      <Input
      type="text"
        placeholder="Shop Category"
        value={formData.shopCategory}
        onChange={(e) =>
          setFormData({ ...formData, shopCategory: e.target.value })
        }
      />

      <Input
      type="text"
        placeholder="Shop Speciality"
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

      <Input
      type="text"
        placeholder="Shop Address"
        value={formData.shopAddress}
        onChange={(e) =>
          setFormData({ ...formData, shopAddress: e.target.value })
        }
      />
      {/* <input
        type="text"
        placeholder="Shop Address"
        className="input"
        value={formData.shopAddress}
        onChange={(e) =>
          setFormData({ ...formData, shopAddress: e.target.value })
        }
      /> */}
    </div>
  );
}
