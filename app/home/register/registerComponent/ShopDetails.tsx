export default function ShopDetails() {
  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-sm font-semibold">Shop Details</h3>
      <input type="text" placeholder="Shop Name" className="input" />
      <input type="text" placeholder="Shop Category" className="input" />
      <input type="text" placeholder="Shop Speciality" className="input" />
      <select className="input">
        <option>Retail</option>
        <option>Bulk</option>
        <option>Retail & Bulk</option>
      </select>
      <input type="text" placeholder="Shop Address" className="input" />
    </div>
  );
}
