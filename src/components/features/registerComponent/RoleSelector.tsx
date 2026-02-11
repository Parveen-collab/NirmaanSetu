interface Props {
  role: string;
  setRole: (role: any) => void;
}

export default function RoleSelector({ role, setRole }: Props) {
  return (
    <div className="mt-6">
      <label className="block text-sm font-medium mb-2">Select Role</label>

      <div className="grid grid-cols-3 gap-3">
        {["employee", "employer", "shop"].map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            className={`rounded-lg border py-2 text-sm font-medium transition ${
              role === r
                ? "bg-primary text-red border-primary"
                : "border-zinc-300 hover:border-primary"
            }`}
          >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
