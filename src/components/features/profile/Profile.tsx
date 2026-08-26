"use client";

import { useRouter } from "next/navigation";
import { Share2, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";

import EditProfileModal, {
    EditProfileFormData,
    AddressFormData,
} from "@/src/components/features/profile/EditProfileModal";

import { deleteUser, updateUser } from "@/src/services/userService";

interface ProfileData {
    id: string;

    mobile: string;
    fullName: string;
    email?: string;
    aadhaar: string;

    role: "employee" | "employer" | "shop";

    permanentAddress: AddressFormData;
    currentAddress: AddressFormData;

    employeeDetails?: {
        serviceCategory: string;
        serviceSpecialty: string;
        experience: number;
    };

    employerDetails?: {
        companyName: string;
        companyAddress: string;
        companyPhotos: string;
    };

    shopDetails?: {
        shopName: string;
        shopCategory: string;
        shopSpeciality: string;
        shopType: string;
        shopAddress: string;
    };

    photoUrl?: string;
}


/* ----------------------------------------
   Temporary Mock Profile
----------------------------------------- */

const mockProfile: ProfileData = {
    id: "USER_ID_HERE",

    mobile: "9876543210",
    fullName: "Parveen Kumar",
    email: "parveen@example.com",
    aadhaar: "123456789012",

    role: "employee",

    permanentAddress: {
        state: "Bihar",
        district: "Patna",
        wardNumber: "12",
        landmark: "Near Gandhi Maidan",
        pincode: "800001",
        areaVillage: "Patna",
        building: "House 123",
    },

    currentAddress: {
        state: "Bihar",
        district: "Patna",
        wardNumber: "5",
        landmark: "IIT Patna",
        pincode: "801103",
        areaVillage: "Bihta",
        building: "Campus",
    },

    employeeDetails: {
        serviceCategory: "Construction",
        serviceSpecialty: "Electrician",
        experience: 3,
    },

    photoUrl: "/avatar.png",
};


/* ----------------------------------------
   Detail Group
----------------------------------------- */

const DetailGroup = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <div className="space-y-4 border-t pt-4 first:border-t-0 first:pt-0">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {title}
        </h3>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {children}
        </div>
    </div>
);


/* ----------------------------------------
   Detail
----------------------------------------- */

const Detail = ({
    label,
    value,
}: {
    label: string;
    value: string | number | undefined;
}) => (
    <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground">
            {label}
        </p>

        <p className="text-sm font-medium">
            {value || "Not provided"}
        </p>
    </div>
);


/* ----------------------------------------
   Profile Component
----------------------------------------- */

const Profile = () => {
    const router = useRouter();

    /*
     * Temporary profile.
     *
     * Replace this with your actual logged-in user/profile
     * data when you connect GET /user/:id.
     */
    const [profile, setProfile] = useState<ProfileData>(mockProfile);

    const [showDeletePopup, setShowDeletePopup] =
        useState(false);

    const [showEditPopup, setShowEditPopup] =
        useState(false);

    const [isUpdating, setIsUpdating] =
        useState(false);

    const [isDeleting, setIsDeleting] =
        useState(false);


    /*
     * Current logged-in user's ID.
     *
     * IMPORTANT:
     * Replace this with the ID from your authentication
     * state/context/localStorage.
     */
    const currentUserId = profile.id;


    /* ----------------------------------------
       Update Profile
    ----------------------------------------- */

    const handleUpdateProfile = async (
        data: EditProfileFormData
    ) => {
        try {
            setIsUpdating(true);

            const payload = {
                phoneNumber: data.phoneNumber,

                name: data.name,

                email: data.email,

                aadhaarNumber: data.aadhaarNumber,

                /*
                 * Keep the existing role.
                 *
                 * Backend expects enum values such as:
                 * EMPLOYEE / EMPLOYER / SUPPLIER
                 */
                role:
                    profile.role === "employee"
                        ? "EMPLOYEE"
                        : profile.role === "employer"
                            ? "EMPLOYER"
                            : "SUPPLIER",

                addresses: [
                    {
                        type: "PERMANENT",

                        state:
                            data.permanentAddress.state,

                        district:
                            data.permanentAddress.district,

                        wardNumber:
                            data.permanentAddress.wardNumber,

                        landmark:
                            data.permanentAddress.landmark,

                        pincode:
                            data.permanentAddress.pincode,

                        areaVillage:
                            data.permanentAddress.areaVillage,

                        building:
                            data.permanentAddress.building,
                    },

                    {
                        type: "CURRENT",

                        state:
                            data.currentAddress.state,

                        district:
                            data.currentAddress.district,

                        wardNumber:
                            data.currentAddress.wardNumber,

                        landmark:
                            data.currentAddress.landmark,

                        pincode:
                            data.currentAddress.pincode,

                        areaVillage:
                            data.currentAddress.areaVillage,

                        building:
                            data.currentAddress.building,
                    },
                ],

                /*
                 * Employee specific data
                 */
                employeeProfile:
                    profile.role === "employee"
                        ? {
                            serviceCategory:
                                data.serviceCategory,

                            serviceSpeciality:
                                data.serviceSpeciality,

                            experienceYears:
                                data.experienceYears,
                        }
                        : undefined,
            };


            console.log(
                "PATCH payload:",
                payload
            );


            /*
             * PATCH /user/:id
             */
            const updatedUser =
                await updateUser(
                    currentUserId,
                    payload
                );


            console.log(
                "Profile updated:",
                updatedUser
            );


            /*
             * Update local UI immediately.
             *
             * This avoids requiring another GET request
             * while you're still using the mock profile.
             */
            setProfile((previous) => ({
                ...previous,

                mobile:
                    data.phoneNumber,

                fullName:
                    data.name,

                email:
                    data.email,

                aadhaar:
                    data.aadhaarNumber,

                permanentAddress:
                    data.permanentAddress,

                currentAddress:
                    data.currentAddress,

                employeeDetails:
                    previous.role === "employee"
                        ? {
                            serviceCategory:
                                data.serviceCategory,

                            serviceSpecialty:
                                data.serviceSpeciality,

                            experience:
                                data.experienceYears,
                        }
                        : previous.employeeDetails,
            }));


            setShowEditPopup(false);

        } catch (error) {
            console.error(
                "Failed to update profile:",
                error
            );

            alert(
                "Failed to update profile. Please try again."
            );

        } finally {
            setIsUpdating(false);
        }
    };


    /* ----------------------------------------
   Delete User
----------------------------------------- */

const handleDelete = async () => {
    try {
        setIsDeleting(true);

        await deleteUser(currentUserId);

        console.log(
            "User deleted successfully:",
            currentUserId
        );

        setShowDeletePopup(false);

        /*
         * After successful deletion:
         *
         * - clear auth token
         * - clear user state
         * - redirect to login
         */

        localStorage.removeItem("token");

        router.push("/login");

    } catch (error) {
        console.error(
            "Failed to delete user:",
            error
        );

        alert(
            "Failed to delete account. Please try again."
        );

    } finally {
        setIsDeleting(false);
    }
};


    /* ----------------------------------------
       Share Profile
    ----------------------------------------- */

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: "My Profile",
                    text: "Check my profile on NirmaanSetu",
                    url: window.location.href,
                });
            }
        } catch (error) {
            console.error(
                "Failed to share profile:",
                error
            );
        }
    };


    return (
        <section className="min-h-screen bg-background px-4 py-10 text-foreground">

            <div className="mx-auto max-w-4xl space-y-8">


                {/* ----------------------------------------
                    Header
                ----------------------------------------- */}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <h1 className="text-2xl font-bold">
                        My Profile
                    </h1>


                    <div className="flex gap-3">

                        {/* Share */}

                        <button
                            type="button"
                            onClick={handleShare}
                            className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm transition hover:bg-muted"
                        >
                            <Share2 className="h-4 w-4" />

                            Share
                        </button>


                        {/* Edit */}

                        <button
                            type="button"
                            onClick={() =>
                                setShowEditPopup(true)
                            }
                            disabled={isUpdating}
                            className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Pencil className="h-4 w-4" />

                            Edit
                        </button>


                        {/* Delete */}

                        <button
                            type="button"
                            onClick={() =>
                                setShowDeletePopup(true)
                            }
                            disabled={isDeleting}
                            className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Trash2 className="h-4 w-4" />

                            Delete
                        </button>

                    </div>

                </div>


                {/* ----------------------------------------
                    Profile Card
                ----------------------------------------- */}

                <div className="space-y-6 rounded-xl border bg-card p-6 shadow-sm">


                    {/* Basic Info */}

                    <div className="flex items-center gap-4">

                        <img
                            src={
                                profile.photoUrl ||
                                "/avatar.png"
                            }
                            alt="Profile"
                            className="h-20 w-20 rounded-full border object-cover"
                        />

                        <div>

                            <h2 className="text-xl font-semibold">
                                {profile.fullName}
                            </h2>

                            <p className="text-sm capitalize text-muted-foreground">
                                {profile.role}
                            </p>

                        </div>

                    </div>


                    {/* Personal Details */}

                    <DetailGroup title="Personal Details">

                        <Detail
                            label="Mobile"
                            value={profile.mobile}
                        />

                        <Detail
                            label="Email"
                            value={profile.email}
                        />

                        <Detail
                            label="Aadhaar"
                            value={profile.aadhaar}
                        />

                        <Detail
                            label="Permanent Address"
                            value={`${profile.permanentAddress.areaVillage}, ${profile.permanentAddress.district}, ${profile.permanentAddress.state}`}
                        />

                        <Detail
                            label="Current Address"
                            value={`${profile.currentAddress.areaVillage}, ${profile.currentAddress.district}, ${profile.currentAddress.state}`}
                        />

                    </DetailGroup>


                    {/* ----------------------------------------
                        Employee Details
                    ----------------------------------------- */}

                    {profile.role === "employee" &&
                        profile.employeeDetails && (
                            <DetailGroup title="Employee Details">

                                <Detail
                                    label="Service Category"
                                    value={
                                        profile
                                            .employeeDetails
                                            .serviceCategory
                                    }
                                />

                                <Detail
                                    label="Service Specialty"
                                    value={
                                        profile
                                            .employeeDetails
                                            .serviceSpecialty
                                    }
                                />

                                <Detail
                                    label="Experience"
                                    value={`${profile.employeeDetails.experience} years`}
                                />

                            </DetailGroup>
                        )}


                    {/* ----------------------------------------
                        Employer Details
                    ----------------------------------------- */}

                    {profile.role === "employer" &&
                        profile.employerDetails && (
                            <DetailGroup title="Employer Details">

                                <Detail
                                    label="Company Name"
                                    value={
                                        profile
                                            .employerDetails
                                            .companyName
                                    }
                                />

                                <Detail
                                    label="Company Address"
                                    value={
                                        profile
                                            .employerDetails
                                            .companyAddress
                                    }
                                />

                                <Detail
                                    label="Company Photos"
                                    value={
                                        profile
                                            .employerDetails
                                            .companyPhotos
                                    }
                                />

                            </DetailGroup>
                        )}


                    {/* ----------------------------------------
                        Shop Details
                    ----------------------------------------- */}

                    {profile.role === "shop" &&
                        profile.shopDetails && (
                            <DetailGroup title="Shop Details">

                                <Detail
                                    label="Shop Name"
                                    value={
                                        profile
                                            .shopDetails
                                            .shopName
                                    }
                                />

                                <Detail
                                    label="Category"
                                    value={
                                        profile
                                            .shopDetails
                                            .shopCategory
                                    }
                                />

                                <Detail
                                    label="Speciality"
                                    value={
                                        profile
                                            .shopDetails
                                            .shopSpeciality
                                    }
                                />

                                <Detail
                                    label="Type"
                                    value={
                                        profile
                                            .shopDetails
                                            .shopType
                                    }
                                />

                                <Detail
                                    label="Address"
                                    value={
                                        profile
                                            .shopDetails
                                            .shopAddress
                                    }
                                />

                            </DetailGroup>
                        )}

                </div>

            </div>


            {/* ----------------------------------------
                Delete Confirmation Modal
            ----------------------------------------- */}

            {showDeletePopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

                    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

                        <div className="flex items-center gap-3">

                            <div className="rounded-full bg-red-100 p-2 text-red-600">
                                <Trash2 className="h-5 w-5" />
                            </div>

                            <h2 className="text-xl font-semibold">
                                Delete Account?
                            </h2>

                        </div>


                        <p className="mt-4 text-sm text-muted-foreground">
                            Are you sure you want to delete your
                            account? This action cannot be undone.
                        </p>


                        <div className="mt-6 flex justify-end gap-3">

                            <button
                                type="button"
                                onClick={() =>
                                    setShowDeletePopup(false)
                                }
                                disabled={isDeleting}
                                className="cursor-pointer rounded-lg border px-4 py-2 text-sm transition hover:bg-muted disabled:opacity-50"
                            >
                                Cancel
                            </button>


                            <button
                                type="button"
                                onClick={handleDelete}
                                disabled={isDeleting}
                                className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isDeleting
                                    ? "Deleting..."
                                    : "Delete Account"}
                            </button>

                        </div>

                    </div>

                </div>
            )}


            {/* ----------------------------------------
                Edit Profile Modal
            ----------------------------------------- */}

            <EditProfileModal
                isOpen={showEditPopup}
                profile={profile}
                onClose={() =>
                    setShowEditPopup(false)
                }
                onSave={handleUpdateProfile}
            />

        </section>
    );
};

export default Profile;