"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProfile } from "@/src/context/ProfileContext";

import Button from "@/src/components/common/Button";
import Modal from "@/src/components/features/SuccessModal";

import AddressDetailForm from "@/src/components/features/registerComponent/AddressDetailForm";
import RoleSelector from "@/src/components/features/registerComponent/RoleSelector";
import RoleSpecificDetails from "@/src/components/features/registerComponent/RoleSpecificDetails";
import LivePhotoUpload from "@/src/components/features/registerComponent/LivePhotoUpload";
import LeftInfo from "@/src/components/features/registerComponent/LeftInfo";
import Link from "next/link";
import BasicDetailForm from "@/src/components/features/registerComponent/BasicDetailForm";

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

  /* ============================= */
  /* Step Navigation Logic (Fixed) */
  /* ============================= */

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

  /* ============================= */
  /* Submit */
  /* ============================= */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🛑 Prevent submit unless on last step
    if (currentStep !== TOTAL_STEPS) return;

    const finalData = {
      ...formData,
      role,
    };

    setProfile(finalData);
    setShowSuccess(true);
  };


  /* ============================= */
  /* Steps Array (Cleaner Version) */
  /* ============================= */

  const steps = [
    <BasicDetailForm
      key="basic"
      formData={formData}
      setFormData={setFormData}
    />,
    <AddressDetailForm
      key="address"
      formData={formData}
      setFormData={setFormData}
    />,
    <RoleSelector key="role" role={role} setRole={setRole} />,
    <RoleSpecificDetails
      key="roleDetails"
      role={role}
      formData={formData}
      setFormData={setFormData}
    />,
    <LivePhotoUpload
      key="photo"
      formData={formData}
      setFormData={setFormData}
    />,
  ];

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
                className="h-full bg-[rgb(var(--color-primary)/1)] transition-all duration-300 ease-in-out"
                style={{
                  width: `${(currentStep / TOTAL_STEPS) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-2">
            Create Account
          </h2>

          <p className="text-sm text-muted mb-6">
            Register to get started with NirmaanSetu
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              {steps[currentStep - 1]}
            </div>

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
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1"
                >
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
        <div className="flex justify-center content-center">
          <Button
            variant="success"
            onClick={() => router.push("/home/login")}
          >
            Ok
          </Button>
        </div>
      </Modal>
    </div>
  );
}
