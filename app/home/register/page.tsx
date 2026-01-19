"use client";

import { useState } from "react";
import Button from "@/src/components/ui/Button";
import Modal from "@/src/components/ui/SuccessModal";

import BasicDetails from "./registerComponent/BasicDetails";
import AddressDetails from "./registerComponent/AddressDetails";
import RoleSelector from "./registerComponent/RoleSelector";
import RoleSpecificDetails from "./registerComponent/RoleSpecificDetails";
import LivePhotoUpload from "./registerComponent/LivePhotoUpload";
import LeftInfo from "./registerComponent/LeftInfo";

export default function Register() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [role, setRole] = useState<"employee" | "employer" | "shop" | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-background">
      
      {/* LEFT INFO */}
      <LeftInfo/>

      {/* FORM */}
      <div className="flex items-center justify-center px-6 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-md dark:bg-zinc-900 animate-fade"
        >
          <h2 className="text-2xl font-bold text-primary mb-2">Create Account</h2>
          <p className="text-sm text-muted mb-6">
            Register to get started with NirmaanSetu
          </p>

          <BasicDetails />
          <AddressDetails />
          <RoleSelector role={role} setRole={setRole} />
          <RoleSpecificDetails role={role} />
          <LivePhotoUpload />

          <Button type="submit" className="mt-6 w-full">
            Submit
          </Button>
        </form>
      </div>

      {/* SUCCESS MODAL */}
      <Modal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Registered"
      >
        <p className="mb-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
          Registration completed successfully.
        </p>

        <Button href="/dashboard" variant="success">
          OK
        </Button>
      </Modal>
    </div>
  );
}
