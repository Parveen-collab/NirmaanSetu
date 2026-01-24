"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProfile } from "@/src/context/ProfileContext";

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
  const { setProfile } = useProfile();
  const router = useRouter();

  const [formData, setFormData] = useState<any>({
    mobile: "",
    fullName: "",
    aadhaar: "",
    permanentAddress: "",
    currentAddress: "",
    role: "",
    serviceCategory: "",
    serviceSpecialty: "",
    experience: "",
    companyName: "",
    companyAddress: "",
    companyPhotos: "",
    shopName: "",
    shopCategory: "",
    shopSpeciality: "",
    shopType: "",
    shopAddress: "",
    photo: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      role,
    };

    setProfile(finalData); // ✅ Save to context
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-background">
      <LeftInfo />

      <div className="flex items-center justify-center px-6 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-md dark:bg-zinc-900 animate-fade"
        >
          <h2 className="text-2xl font-bold text-primary mb-2">Create Account</h2>
          <p className="text-sm text-muted mb-6">
            Register to get started with NirmaanSetu
          </p>

          <BasicDetails formData={formData} setFormData={setFormData} />
          <AddressDetails formData={formData} setFormData={setFormData} />
          <RoleSelector role={role} setRole={setRole} />
          <RoleSpecificDetails role={role} formData={formData} setFormData={setFormData} />
          <LivePhotoUpload formData={formData} setFormData={setFormData} />

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

        <Button
          variant="success"
          onClick={() => router.push("/profile")}
        >
          Go to Profile
        </Button>
      </Modal>
    </div>
  );
}
