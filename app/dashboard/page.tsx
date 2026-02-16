'use client'

import { useState } from 'react'
import EmployeePage from "@/src/components/features/employee/EmployeePage"
import EmployerPage from "@/src/components/features/employer/EmployerPage"
import ProjectPage from "@/src/components/features/project/ProjectPage"
import ShopPage from "@/src/components/features/shop/ShopPage"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('employees')

  return (
    <div className="bg-zinc-50 dark:bg-black p-6">

      {/* Content */}
      <div className="bg-white dark:bg-zinc-900 rounded-lg p-4">
        {activeTab === 'employees' && <EmployeePage />}
        {activeTab === 'employers' && <EmployerPage />}
        {activeTab === 'projects' && <ProjectPage />}
        {activeTab === 'shop' && <ShopPage />}
      </div>
    </div>
  )
}
