export default function EmployeeDetails() {
  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-sm font-semibold">Employee Details</h3>
      <input type="text" placeholder="Service Category" className="input" />
      <input type="text" placeholder="Service Specialty" className="input" />
      <input type="number" placeholder="Experience (years)" className="input" />
    </div>
  );
}
