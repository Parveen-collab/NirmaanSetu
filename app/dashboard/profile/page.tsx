"use client";
import { useProfile } from "@/src/context/ProfileContext";

const ProfilePage = () => {
  const { profile } = useProfile();

  if (!profile) {
    return (
      <div className="p-10 text-center">
        No profile found. Please register first.
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1>{profile.fullName}</h1>
      <p>{profile.mobile}</p>
      <p>{profile.role}</p>
    </div>
  );
};

export default ProfilePage;
