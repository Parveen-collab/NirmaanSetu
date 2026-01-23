import { Bell } from "lucide-react";

const Notification = () => {
  return (
    <section className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <p className="text-muted-foreground">
            You have no new notifications yet.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Notification
