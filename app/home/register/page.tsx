"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProfile } from "@/src/context/ProfileContext";

import Button from "@/src/components/common/Button";
import Modal from "@/src/components/features/SuccessModal";

import BasicDetails from "@/src/components/features/registerComponent/BasicDetails";
import AddressDetails from "@/src/components/features/registerComponent/AddressDetails";
import RoleSelector from "@/src/components/features/registerComponent/RoleSelector";
import RoleSpecificDetails from "@/src/components/features/registerComponent/RoleSpecificDetails";
import LivePhotoUpload from "@/src/components/features/registerComponent/LivePhotoUpload";
import LeftInfo from "@/src/components/features/registerComponent/LeftInfo";
import Link from "next/link";

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const TOTAL_STEPS = 5;
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

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      role,
    };

    setProfile(finalData); // ✅ Save to context
    setShowSuccess(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicDetails formData={formData} setFormData={setFormData} />;
      case 2:
        return <AddressDetails formData={formData} setFormData={setFormData} />;
      case 3:
        return <RoleSelector role={role} setRole={setRole} />;
      case 4:
        return (
          <RoleSpecificDetails
            role={role}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 5:
        return <LivePhotoUpload formData={formData} setFormData={setFormData} />;
      default:
        return <BasicDetails formData={formData} setFormData={setFormData} />;
    }
  };

  const stepTitles = [
    "Identity",
    "Location",
    "Role Definition",
    "Professional Info",
    "Verification",
  ];

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-background">
      <LeftInfo />

      <div className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-md dark:bg-zinc-900 animate-fade">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-xs font-semibold text-primary uppercase">
                Step {currentStep} of {TOTAL_STEPS}
              </span>
              <span className="text-xs font-semibold text-primary uppercase">
                {stepTitles[currentStep - 1]}
              </span>
            </div>
            <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300 ease-in-out"
                style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
              ></div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-2">Create Account</h2>
          <p className="text-sm text-muted mb-6">
            Register to get started with NirmaanSetu
          </p>

          <form onSubmit={handleSubmit}>
            <div className="min-h-[300px]">{renderStep()}</div>

            <div className="mt-8 flex gap-4">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={prevStep}
                  className="flex-1"
                >
                  Back
                </Button>
              )}
              {currentStep < TOTAL_STEPS ? (
                <Button type="button" onClick={nextStep} className="flex-1">
                  Next
                </Button>
              ) : (
                <Button type="submit" className="flex-1">
                  Submit
                </Button>
              )}
            </div>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-muted">
            Already user?{" "}
            <Link
              href="/home/login"
              className="font-medium text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
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
          onClick={() => router.push("/home/login")}
        >
          Go to Login
        </Button>
      </Modal>
    </div>
  );
}
