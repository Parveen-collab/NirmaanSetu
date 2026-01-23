"use client";

import { createContext, useContext, useState } from "react";

type ProfileContextType = {
  profile: any;
  setProfile: (data: any) => void;
};

const ProfileContext = createContext<ProfileContextType | null>(null);

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState(null);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used inside ProfileProvider");
  }
  return context;
};
