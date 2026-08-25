"use client";

import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

export interface AddressFormData {
    state: string;
    district: string;
    wardNumber: string;
    landmark: string;
    pincode: string;
    areaVillage: string;
    building: string;
}

export interface EditProfileFormData {
    phoneNumber: string;
    name: string;
    email: string;
    aadhaarNumber: string;

    permanentAddress: AddressFormData;
    currentAddress: AddressFormData;

    serviceCategory: string;
    serviceSpeciality: string;
    experienceYears: number;
}

interface ProfileData {
    mobile: string;
    fullName: string;
    aadhaar: string;
    role: "employee" | "employer" | "shop";

    employeeDetails?: {
        serviceCategory: string;
        serviceSpecialty: string;
        experience: number;
    };

    // We'll use these once your real API returns
    // structured address data.
    permanentAddress?: AddressFormData;
    currentAddress?: AddressFormData;

    email?: string;
}

interface EditProfileModalProps {
    isOpen: boolean;
    profile: ProfileData;
    onClose: () => void;
    onSave: (data: EditProfileFormData) => void;
}

export default function EditProfileModal({
    isOpen,
    profile,
    onClose,
    onSave,
}: EditProfileModalProps) {
    const [formData, setFormData] = useState<EditProfileFormData>({
        phoneNumber: "",
        name: "",
        email: "",
        aadhaarNumber: "",

        permanentAddress: {
            state: "",
            district: "",
            wardNumber: "",
            landmark: "",
            pincode: "",
            areaVillage: "",
            building: "",
        },

        currentAddress: {
            state: "",
            district: "",
            wardNumber: "",
            landmark: "",
            pincode: "",
            areaVillage: "",
            building: "",
        },

        serviceCategory: "",
        serviceSpeciality: "",
        experienceYears: 1,
    });

    useEffect(() => {
        if (!isOpen) return;

        setFormData({
            phoneNumber: profile.mobile,
            name: profile.fullName,
            email: profile.email ?? "",
            aadhaarNumber: profile.aadhaar.replace(/-/g, ""),

            permanentAddress: profile.permanentAddress ?? {
                state: "",
                district: "",
                wardNumber: "",
                landmark: "",
                pincode: "",
                areaVillage: "",
                building: "",
            },

            currentAddress: profile.currentAddress ?? {
                state: "",
                district: "",
                wardNumber: "",
                landmark: "",
                pincode: "",
                areaVillage: "",
                building: "",
            },

            serviceCategory:
                profile.employeeDetails?.serviceCategory ?? "",

            serviceSpeciality:
                profile.employeeDetails?.serviceSpecialty ?? "",

            experienceYears:
                profile.employeeDetails?.experience ?? 1,
        });
    }, [isOpen, profile]);

    if (!isOpen) return null;

    const updateField = (
        field: keyof EditProfileFormData,
        value: string | number
    ) => {
        setFormData((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const updateAddress = (
        type: "permanentAddress" | "currentAddress",
        field: keyof AddressFormData,
        value: string
    ) => {
        setFormData((previous) => ({
            ...previous,
            [type]: {
                ...previous[type],
                [field]: value,
            },
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSave(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6 shadow-xl">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Edit Profile
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="cursor-pointer rounded-full p-1 hover:bg-muted"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-8">

                    {/* Personal Information */}
                    <section>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        updateField("name", e.target.value)
                                    }
                                    className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    value={formData.phoneNumber}
                                    onChange={(e) =>
                                        updateField(
                                            "phoneNumber",
                                            e.target.value
                                        )
                                    }
                                    className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        updateField("email", e.target.value)
                                    }
                                    className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Aadhaar Number
                                </label>

                                <input
                                    type="text"
                                    value={formData.aadhaarNumber}
                                    onChange={(e) =>
                                        updateField(
                                            "aadhaarNumber",
                                            e.target.value
                                        )
                                    }
                                    maxLength={12}
                                    className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
                                    required
                                />
                            </div>

                        </div>
                    </section>

                    {/* Permanent Address */}
                    <AddressSection
                        title="Permanent Address"
                        address={formData.permanentAddress}
                        onChange={(field, value) =>
                            updateAddress(
                                "permanentAddress",
                                field,
                                value
                            )
                        }
                    />

                    {/* Current Address */}
                    <AddressSection
                        title="Current Address"
                        address={formData.currentAddress}
                        onChange={(field, value) =>
                            updateAddress(
                                "currentAddress",
                                field,
                                value
                            )
                        }
                    />

                    {/* Employee Details */}
                    {profile.role === "employee" && (
                        <section>
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                Employee Details
                            </h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Service Category
                                    </label>

                                    <input
                                        type="text"
                                        value={formData.serviceCategory}
                                        onChange={(e) =>
                                            updateField(
                                                "serviceCategory",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Service Speciality
                                    </label>

                                    <input
                                        type="text"
                                        value={formData.serviceSpeciality}
                                        onChange={(e) =>
                                            updateField(
                                                "serviceSpeciality",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Experience Years
                                    </label>

                                    <input
                                        type="number"
                                        min={1}
                                        value={formData.experienceYears}
                                        onChange={(e) =>
                                            updateField(
                                                "experienceYears",
                                                Number(e.target.value)
                                            )
                                        }
                                        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
                                        required
                                    />
                                </div>

                            </div>
                        </section>
                    )}

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 border-t pt-6">

                        <button
                            type="button"
                            onClick={onClose}
                            className="cursor-pointer rounded-lg border px-4 py-2 text-sm hover:bg-muted"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm text-white hover:opacity-90"
                        >
                            Save Changes
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}


/* ----------------------------------------
   Address Section
----------------------------------------- */

interface AddressSectionProps {
    title: string;
    address: AddressFormData;
    onChange: (
        field: keyof AddressFormData,
        value: string
    ) => void;
}

function AddressSection({
    title,
    address,
    onChange,
}: AddressSectionProps) {
    return (
        <section>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {title}
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <AddressInput
                    label="State"
                    value={address.state}
                    onChange={(value) =>
                        onChange("state", value)
                    }
                    required
                />

                <AddressInput
                    label="District"
                    value={address.district}
                    onChange={(value) =>
                        onChange("district", value)
                    }
                    required
                />

                <AddressInput
                    label="Ward Number"
                    value={address.wardNumber}
                    onChange={(value) =>
                        onChange("wardNumber", value)
                    }
                />

                <AddressInput
                    label="Landmark"
                    value={address.landmark}
                    onChange={(value) =>
                        onChange("landmark", value)
                    }
                />

                <AddressInput
                    label="Pincode"
                    value={address.pincode}
                    onChange={(value) =>
                        onChange("pincode", value)
                    }
                    required
                />

                <AddressInput
                    label="Area / Village"
                    value={address.areaVillage}
                    onChange={(value) =>
                        onChange("areaVillage", value)
                    }
                    required
                />

                <AddressInput
                    label="Building"
                    value={address.building}
                    onChange={(value) =>
                        onChange("building", value)
                    }
                />

            </div>
        </section>
    );
}


/* ----------------------------------------
   Address Input
----------------------------------------- */

interface AddressInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
}

function AddressInput({
    label,
    value,
    onChange,
    required = false,
}: AddressInputProps) {
    return (
        <div>
            <label className="mb-1 block text-sm font-medium">
                {label}
            </label>

            <input
                type="text"
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
                required={required}
            />
        </div>
    );
}