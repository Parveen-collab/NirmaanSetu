"use client";
import { useRouter } from "next/navigation";

import { Share2, Pencil } from "lucide-react";
import React from "react";

interface ProfileData {
    mobile: string;
    fullName: string;
    aadhaar: string;
    permanentAddress: string;
    currentAddress: string;
    role: "employee" | "employer" | "shop";
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

const mockProfile: ProfileData = {
    mobile: "9876543210",
    fullName: "Parveen Kumar",
    aadhaar: "1234-5678-9012",
    permanentAddress: "Patna, Bihar",
    currentAddress: "IIT Patna Campus",
    role: "employee",
    employeeDetails: {
        serviceCategory: "Construction",
        serviceSpecialty: "Electrician",
        experience: 3,
    },
    photoUrl: "/avatar.png",
};

const DetailGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="space-y-4 pt-4 border-t first:border-t-0 first:pt-0">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {children}
        </div>
    </div>
);

const Detail = ({ label, value }: { label: string; value: string | number | undefined }) => (
    <div className="space-y-1">
        <p className="text-xs text-muted-foreground font-medium">{label}</p>
        <p className="text-sm font-medium">{value || "Not provided"}</p>
    </div>
);

const Profile = () => {
    const router = useRouter();
    const profile = mockProfile;

    return (
        <section className="min-h-screen bg-background text-foreground px-4 py-10">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <h1 className="text-2xl font-bold">My Profile</h1>

                    <div className="flex gap-3">
                        <button onClick={() => router.push("/register")} className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-muted transition">
                            <Pencil className="w-4 h-4" />
                            Edit
                        </button>
                        {/* <button onClick={() => router.push("/register")}>Edit</button> */}
                        {/* <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-muted transition">
              <Share2 className="w-4 h-4" />
              Share
            </button> */}
                        <button
                            onClick={() => {
                                navigator.share?.({
                                    title: "My Profile",
                                    text: "Check my profile on NirmaanSetu",
                                    url: window.location.href,
                                });
                            }}
                        >
                            <Share2 className="w-4 h-4" />
                            Share
                        </button>

                    </div>
                </div>

                {/* Profile Card */}
                <div className="rounded-xl border bg-card shadow-sm p-6 space-y-6">

                    {/* Basic Info */}
                    <div className="flex items-center gap-4">
                        <img
                            src={profile.photoUrl}
                            alt="Profile"
                            className="w-20 h-20 rounded-full object-cover border"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{profile.fullName}</h2>
                            <p className="text-sm text-muted-foreground capitalize">
                                {profile.role}
                            </p>
                        </div>
                    </div>

                    {/* Personal Details */}
                    <DetailGroup title="Personal Details">
                        <Detail label="Mobile" value={profile.mobile} />
                        <Detail label="Aadhaar" value={profile.aadhaar} />
                        <Detail label="Permanent Address" value={profile.permanentAddress} />
                        <Detail label="Current Address" value={profile.currentAddress} />
                    </DetailGroup>

                    {/* Role Specific */}
                    {profile.role === "employee" && profile.employeeDetails && (
                        <DetailGroup title="Employee Details">
                            <Detail label="Service Category" value={profile.employeeDetails.serviceCategory} />
                            <Detail label="Service Specialty" value={profile.employeeDetails.serviceSpecialty} />
                            <Detail label="Experience" value={`${profile.employeeDetails.experience} years`} />
                        </DetailGroup>
                    )}

                    {profile.role === "employer" && profile.employerDetails && (
                        <DetailGroup title="Employer Details">
                            <Detail label="Company Name" value={profile.employerDetails.companyName} />
                            <Detail label="Company Address" value={profile.employerDetails.companyAddress} />
                            <Detail label="Company Photos" value={profile.employerDetails.companyPhotos} />
                        </DetailGroup>
                    )}

                    {profile.role === "shop" && profile.shopDetails && (
                        <DetailGroup title="Shop Details">
                            <Detail label="Shop Name" value={profile.shopDetails.shopName} />
                            <Detail label="Category" value={profile.shopDetails.shopCategory} />
                            <Detail label="Speciality" value={profile.shopDetails.shopSpeciality} />
                            <Detail label="Type" value={profile.shopDetails.shopType} />
                            <Detail label="Address" value={profile.shopDetails.shopAddress} />
                        </DetailGroup>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Profile;
