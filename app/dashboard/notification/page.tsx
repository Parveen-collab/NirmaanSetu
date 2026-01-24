"use client";

import { Bell, CheckCircle, XCircle, Briefcase } from "lucide-react";
import Image from "next/image";

interface Notification {
  id: number;
  applicantName: string;
  applicantPhoto: string;
  workTitle: string;
  postedBy: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    applicantName: "Amit Kumar",
    applicantPhoto: "/employees/emp1.jpg",
    workTitle: "Residential Building Wiring",
    postedBy: "Sharma Constructions",
  },
  {
    id: 2,
    applicantName: "Rahul Verma",
    applicantPhoto: "/employees/emp2.jpg",
    workTitle: "Road Construction Project",
    postedBy: "Verma Infra Ltd.",
  },
];

const Notification = () => {
  const hasNotifications = notifications.length > 0;

  return (
    <section className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>

        {/* Notifications */}
        {hasNotifications ? (
          <div className="space-y-5">
            {notifications.map((noti) => (
              <div
                key={noti.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition"
              >
                {/* Left Info */}
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={noti.applicantPhoto}
                      alt={noti.applicantName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold">{noti.applicantName}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Briefcase size={14} />
                      Applied for: {noti.workTitle}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Posted by: {noti.postedBy}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition">
                    <CheckCircle size={16} />
                    Approve
                  </button>

                  <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition">
                    <XCircle size={16} />
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <p className="text-muted-foreground">
              You have no new notifications yet.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Notification;
